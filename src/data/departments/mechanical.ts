
import { SubjectsList } from "../types";
import { semester1Subjects as commonSemester1, createUnavailableSubject } from "./common";

// Mechanical department subjects
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
  }
];

export const semester3Subjects = createUnavailableSubject();

export const semester4Subjects: SubjectsList = [
  {
    id: "bee",
    name: "BEE (Basic Electrical Engineering)",
    units: [
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1ZrEl_rmu2rdpcqg_xx_krm7KeiNQ98ud/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1Ise6Ws9Q87KcnPn-nbv0IYvOMbzYnskp/view"
      }
    ]
  },
  {
    id: "atd",
    name: "ATD (Automobile Technology and Design)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1ukGFTLFWvUnIrsr7RAvJEf8oDOczmtXW/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1iK4YXoUlVqpaXnnROr5LicMU7B6LJLDg/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1F14nDzJ8HP9L37AA6pzsgRpk0kW6ruyT/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1O_UR_xF_dOZBZHqCviA7nmeHE3LKcmn3/view"
      }
    ]
  },
  {
    id: "kom",
    name: "KOM (Kinematics of Machinery)",
    units: [
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1BBWKrpOZGwBUDBPgzzoj5vpTllGvBDLh/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1fc1QzsFy5het_FDZZ6FQZpYSh80r9Lxu/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1h83_-EqX8RXkYiGRUFv9-JRP_zVPbG7Z/view"
      }
    ]
  },
  {
    id: "mft",
    name: "MFT (Manufacturing Technology)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1XCfCt0M-j1E9cQJpaAfRbGmh-aoQ8GkC/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1DtU6wG3NaerTlq30gOveyFC3lj-lSpNI/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1kJD_WYjKPtfpAgjyHW39ZzWL3DTXdR9m/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1_3o5XbxcgCcQuJ50-q7Zxmg7ok0SlC29/view"
      }
    ]
  },
  {
    id: "pefm",
    name: "PEFM (Production Economics and Financial Management)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1i2GHP_lCwZjgLhduWkAtTieRD-QRLOD0/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1nA-IxE8y9Rkdg0Zzi44KmX_12-F-59qV/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1vZacin1ptj0HRGJGZ1853qqpG4GE1qBg/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1VeKGitv1nb7LgwQujK8xHpdArdHCL-9W/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1zKArzyNZcuH6sytvbaWyTehQwv0lVnlO/view"
      }
    ]
  }
];

export const semester5Subjects = createUnavailableSubject();

export const semester6Subjects: SubjectsList = [
  {
    id: "or",
    name: "OR (Operations Research)",
    units: [
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1J05uNPZ56_CCp7uEEMVKspQ17v05hTcX/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1UqtTqLyGf4VRLGA7SB5LfKwLk5dCvZB8/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1ootHIYI8FbpVkxKwOrCSHHOTF_07FrSK/view"
      }
    ]
  },
  {
    id: "dmm",
    name: "DMM (Design of Machine Members)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/11DSMSkZN_nCi8rQvgkWZeW090YRtVnTP/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1huOY8E81Kzqulb52qH9QqcgRZ_WKrxbd/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1fgg1VBjimwuDuD_KYKwCoeTVhdqTr1q4/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1uw34y8UhP9lDgI61j7ARyOn-S_869-Ne/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1DWtMtWvXiUEnj2GgO7TKeNAif_PO_ktw/view"
      }
    ]
  },
  {
    id: "ht",
    name: "HT (Heat Transfer)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1mNriGOZIocSZ_T_Z5vlEoVn5F57ffGtv/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1c3_qWOSwETPFCUYzupBLnih-R7CH8Wrs/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1VKi9PmNHQxuoTe9pVRFr0KgCHylz8zlu/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1SsTxG61rf47xk88ku0Xz4lhrDo9_w-gO/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1QtHEK5p2N2mM3ihsbc3209sJOGkxtV3O/view"
      }
    ]
  },
  {
    id: "fem",
    name: "FEM (Finite Element Method)",
    units: [
      {
        name: "Unit 1",
        link: "https://drive.google.com/file/d/1FDl5WEb2LqRH1v7-GXW7pORPRXriCURR/view"
      },
      {
        name: "Unit 2",
        link: "https://drive.google.com/file/d/1dIyQsX9qrrZZe3xcRUG4Bhd4U12Xwfs6/view"
      },
      {
        name: "Unit 3",
        link: "https://drive.google.com/file/d/1qOZDk_X-8D13UlzKLpvRVp5bSaqZ6RKu/view"
      },
      {
        name: "Unit 4",
        link: "https://drive.google.com/file/d/1_mqvRC3Z0Op8ecdFJUpEcCI6TMDi9V-w/view"
      },
      {
        name: "Unit 5",
        link: "https://drive.google.com/file/d/1to1edsHJo-tmNOqsRCRaGiHwIf4nNTQk/view"
      }
    ]
  }
];
