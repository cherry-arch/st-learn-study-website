import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";
import type { AuthError } from "@supabase/supabase-js";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // Check initial session
    const checkSession = async () => {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) {
        const errorMessage = getErrorMessage(error);
        setError(errorMessage);
        // Clear any stale session data
        await supabase.auth.signOut();
      } else if (session) {
        navigate("/");
      }
    };

    checkSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (event === "SIGNED_IN" && session) {
        navigate("/");
      }
      if (event === "TOKEN_REFRESHED" && !session) {
        // Handle failed token refresh
        setError("Your session has expired. Please sign in again.");
        await supabase.auth.signOut();
      }
      if (event === "SIGNED_OUT") {
        setError(""); // Clear errors on sign out
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const getErrorMessage = (error: AuthError) => {
    // Parse the error body if it exists
    try {
      if (error.message.includes("refresh_token_not_found")) {
        return "Your session has expired. Please sign in again.";
      }
      
      const errorBody = error.message && JSON.parse(error.message);
      if (errorBody?.code === "invalid_credentials") {
        return "Invalid email or password. Please check your credentials and try again.";
      }
      if (errorBody?.code === "validation_failed") {
        return "Please enter both email and password.";
      }
    } catch (e) {
      // If parsing fails, fall through to default cases
    }

    // Handle other common error cases
    switch (error.message) {
      case "Invalid login credentials":
        return "Invalid email or password. Please check your credentials and try again.";
      case "Email not confirmed":
        return "Please verify your email address before signing in.";
      case "User not found":
        return "No account found with these credentials.";
      case "missing email or phone":
        return "Please enter your email address.";
      default:
        return error.message;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-900">Welcome Back</h2>
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
        <Auth
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          theme="light"
          providers={[]}
        />
      </div>
    </div>
  );
};

export default Login;