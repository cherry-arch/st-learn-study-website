
// Re-export all subjects from individual department files to maintain backward compatibility

// Import from ECE department
import {
  semester1Subjects,
  semester2Subjects,
  semester3Subjects,
  semester4Subjects,
  semester5Subjects,
  semester6Subjects
} from "./departments/ece";

// Import from EEE department
import {
  semester1Subjects as eee1Subjects,
  semester2Subjects as eee2Subjects,
  semester3Subjects as eee3Subjects,
  semester4Subjects as eee4Subjects
} from "./departments/eee";

// Import from Civil department
import {
  semester1Subjects as civil1Subjects,
  semester2Subjects as civilSem2Subjects,
  semester3Subjects as civilSem3Subjects,
  semester4Subjects as civilSem4Subjects,
  semester5Subjects as civilSem5Subjects,
  semester6Subjects as civilSem6Subjects
} from "./departments/civil";

// Import from Mechanical department
import {
  semester2Subjects as mechSem2Subjects,
  semester3Subjects as mechSem3Subjects,
  semester4Subjects as mechSem4Subjects,
  semester5Subjects as mechSem5Subjects,
  semester6Subjects as mechSem6Subjects
} from "./departments/mechanical";

// Import from Computer Science Engineering department
import {
  semester1Subjects as cse1Subjects,
  semester2Subjects as cse2Subjects,
  semester3Subjects as cse3Subjects,
  semester4Subjects as cse4Subjects,
  semester5Subjects as cse5Subjects,
  semester6Subjects as cse6Subjects
} from "./departments/cse";

// Import from Computer Science and Business Systems department
import {
  semester1Subjects as csbs1Subjects,
  semester2Subjects as csbs2Subjects,
  semester3Subjects as csbs3Subjects,
  semester4Subjects as csbs4Subjects,
  semester5Subjects as csbs5Subjects,
  semester6Subjects as csbs6Subjects
} from "./departments/csbs";

// Import from Computer Science (Data Science) department
import {
  semester1Subjects as csds1Subjects,
  semester2Subjects as csds2Subjects,
  semester3Subjects as csds3Subjects,
  semester4Subjects as csds4Subjects,
  semester5Subjects as csds5Subjects,
  semester6Subjects as csds6Subjects
} from "./departments/csds";

// Import from Computer Science (AI and ML) department
import {
  semester1Subjects as csai1Subjects,
  semester2Subjects as csai2Subjects,
  semester3Subjects as csai3Subjects,
  semester4Subjects as csai4Subjects,
  semester5Subjects as csai5Subjects,
  semester6Subjects as csai6Subjects
} from "./departments/csai";

// Export all the subject arrays to maintain backward compatibility
export {
  semester1Subjects,
  semester2Subjects,
  semester3Subjects,
  semester4Subjects,
  semester5Subjects,
  semester6Subjects,
  eee1Subjects,
  eee2Subjects,
  eee3Subjects,
  eee4Subjects,
  civil1Subjects,
  civilSem2Subjects,
  civilSem3Subjects,
  civilSem4Subjects,
  civilSem5Subjects,
  civilSem6Subjects,
  mechSem2Subjects,
  mechSem3Subjects,
  mechSem4Subjects,
  mechSem5Subjects,
  mechSem6Subjects,
  cse1Subjects,
  cse2Subjects,
  cse3Subjects,
  cse4Subjects,
  cse5Subjects,
  cse6Subjects,
  csbs1Subjects,
  csbs2Subjects,
  csbs3Subjects,
  csbs4Subjects,
  csbs5Subjects,
  csbs6Subjects,
  csds1Subjects,
  csds2Subjects,
  csds3Subjects,
  csds4Subjects,
  csds5Subjects,
  csds6Subjects,
  csai1Subjects,
  csai2Subjects,
  csai3Subjects,
  csai4Subjects,
  csai5Subjects,
  csai6Subjects
};
