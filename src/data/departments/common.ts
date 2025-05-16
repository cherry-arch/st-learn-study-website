
import { SubjectsList } from "../types";

// Common subjects for first semester (shared across departments)
export const semester1Subjects: SubjectsList = [
  {
    id: "beee",
    name: "BEEE (Basic Electrical and Electronics Engineering)",
    units: [
      {
        name: "Unit 1A",
        link: "https://drive.google.com/file/d/1Dx0EVsin2rETwcgpmdUypTh-1Po_R25Q/view"
      },
      {
        name: "Unit 2A",
        link: "https://drive.google.com/file/d/1BlhG-sESyHvdUiWf8HVvMPTuQuzVTX2E/view"
      },
      {
        name: "Unit 1B",
        link: "https://drive.google.com/file/d/1hI0KLpkiSFYIiUmto2ZJPn9B6fwmKPOg/view"
      },
      {
        name: "Unit 3B",
        link: "https://drive.google.com/file/d/1KY-zxj2BTYCJLVR_lZR7rhgxvd3GeQZq/view"
      }
    ]
  },
  {
    id: "lac",
    name: "LAC (Linear Algebra and Calculus)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/19ozvsgXZc7_-ZC9SBGdulI9LTQ98xiAp/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1RwuHjqoo6nM1Tu1I_rlEh10Frzez5x_8/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1W-oL_IAcC0gVtxpsBv9M8DkfPXoyC2nw/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1cn7oQ-05aWHrPLAoQxtRSr5W7rf-Ookm/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1Lwy0r7nmRheTgsU4wZPTKnWNHEAXPaRe/view"
      }
    ]
  },
  {
    id: "eg",
    name: "EG (Engineering Graphics)",
    units: ["Notes will be available soon"]
  },
  {
    id: "inp",
    name: "INP (Introduction to Programming)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1y1UiEDHkOE4q-k5tYw7DsLcd8V-hds4y/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1y1UiEDHkOE4q-k5tYw7DsLcd8V-hds4y/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1y1UiEDHkOE4q-k5tYw7DsLcd8V-hds4y/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1y1UiEDHkOE4q-k5tYw7DsLcd8V-hds4y/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1y1UiEDHkOE4q-k5tYw7DsLcd8V-hds4y/view"
      }
    ]
  },
  {
    id: "eng",
    name: "ENG (Professional English)",
    units: ["Notes will be available soon"]
  }
];

// Generic "no content yet" template
export const createUnavailableSubject = (): SubjectsList => [
  {
    id: "unavailable",
    name: "Notes",
    units: ["Notes will be available soon"]
  }
];
