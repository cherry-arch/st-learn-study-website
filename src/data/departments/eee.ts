
import { SubjectsList } from "../types";
import { semester1Subjects as commonSemester1, createUnavailableSubject } from "./common";

// EEE department subjects
export const semester1Subjects = commonSemester1;

export const semester2Subjects: SubjectsList = [
  {
    id: "devc",
    name: "DEVC (Device Electronics)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1mfplyokRp4hJvITNTjdAiK0HfLLyMeTd/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/118skpS8sKuq4J45vPD53mtoChGG3EDCR/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1hmCKTMagp5UBWpe-gW5N7ghP2KKOvjv1/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/16aLQHazwK295eW2UyNUgWKVHHa2-RDvk/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1gVg6nXBn8Xwhri9tQrbKTB18FV0bodYO/view"
      }
    ]
  },
  {
    id: "phys",
    name: "PHYS (Physics)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1eVYW8DLZ5brV8ZFjtzFPy6vNF_CaMH1B/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1259DJswqe6cnCiHUpMomVaZ0pj0qSwun/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1pkdcqxkMGO5GiLncpIpzlfWd6lZ5zLG7/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1l1oAiAZVMWzjzzyiSlluXtCSrNPgD5P2/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/13dor_yhQ6lQo9IdnfmxtzSoIoEBasLM9/view"
      }
    ]
  },
  {
    id: "chem",
    name: "CHEM (Chemistry)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/11Z9RS5DF55kfjnEw9mdOWkqBLiYvrAWr/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1AyoSev0VMGHZigy1WlfCY459SGnwvw-7/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1ql01fRJeQ5kRM_SrJpsx6OBdp9eF5FnD/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1u1UTjd0wuZGzTu4wBEI0klGNmWZgSUMz/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1zsSaeQ9AoxqcSmtdLDziKibcO7fdvM7W/view"
      }
    ]
  },
  {
    id: "bcme",
    name: "BCME (Basic Civil and Mechanical Engineering)",
    units: [
      {
        name: "Unit 1A",
        link: "https://drive.google.com/file/d/1hjtW5ET7v3DXJT9dsBLm_sqJpASvd0sL/view"
      },
      {
        name: "Unit 1B",
        link: "https://drive.google.com/file/d/1wMDCRgFeeCjY_u3V3Ebnc4fjYES8rbM0/view"
      },
      {
        name: "Unit 2A",
        link: "https://drive.google.com/file/d/1HTMpiYMw5bYFAAuXe4-VOPfCn4SdAxnV/view"
      },
      {
        name: "Unit 2B",
        link: "https://drive.google.com/file/d/1ztsWwBTmV2QW5fZMf9KXsj08jp_pec6i/view"
      },
      {
        name: "Unit 3A",
        link: "https://drive.google.com/file/d/1CoCSLQ4lHaedH3pmcjt293emCx6axcSD/view"
      },
      {
        name: "Unit 3B",
        link: "https://drive.google.com/file/d/1fYo8Go7YxQUKeNftYZnDwgsZ4HRBsExu/view"
      }
    ]
  },
  {
    id: "eca",
    name: "ECA (Electronic Circuit Analysis)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1YVkW29yyFVIn4_jZNC1UNvxDTpSzySTl/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1kbJffdB_b4kJNCcctTQBq5amANgLWZi8/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1CmXQgE_IyeNyhtobQrMaHwXWnGScXYBy/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1WzM6P4Q-QPp81OkrTZi8IfyUzIqF-M8c/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1fjnPQ3HxRnwoXaEKfaGlgCMAv6vYccQj/view"
      }
    ]
  }
];

export const semester3Subjects = createUnavailableSubject();
export const semester4Subjects = createUnavailableSubject();
