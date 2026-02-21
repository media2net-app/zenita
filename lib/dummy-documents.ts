export type DummyFolder = {
  id: number;
  name: string;
};

export type DummyDocument = {
  id: number;
  folderId: number;
  name: string;
  category: string;
  added: string;
  description?: string;
  validUntil?: string;
  tags: string[];
  mimeType: string;
  size: string;
};

export const dummyFolders: DummyFolder[] = [
  { id: 1, name: "Health" },
  { id: 2, name: "Personal" },
  { id: 3, name: "Finance" },
  { id: 4, name: "Work" },
];

export const dummyDocuments: DummyDocument[] = [
  {
    id: 1,
    folderId: 1,
    name: "Health insurance policy 2026.pdf",
    category: "Health",
    added: "2 days ago",
    description: "Current health insurance policy document for 2026. Includes coverage details and conditions.",
    validUntil: "Dec 31, 2026",
    tags: ["insurance", "health", "policy"],
    mimeType: "application/pdf",
    size: "1.2 MB",
  },
  {
    id: 2,
    folderId: 1,
    name: "Lab results – bloodwork.pdf",
    category: "Health",
    added: "5 days ago",
    description: "Blood test results from annual check-up. Cholesterol, glucose, and standard panel.",
    tags: ["lab", "health", "bloodwork"],
    mimeType: "application/pdf",
    size: "340 KB",
  },
  {
    id: 3,
    folderId: 2,
    name: "ID card scan.png",
    category: "Personal",
    added: "1 week ago",
    description: "Front and back scan of identity card for official use.",
    validUntil: "Mar 15, 2028",
    tags: ["id", "personal", "identity"],
    mimeType: "image/png",
    size: "890 KB",
  },
  {
    id: 4,
    folderId: 3,
    name: "Rental contract 2025.pdf",
    category: "Finance",
    added: "3 weeks ago",
    description: "Signed rental agreement for current residence.",
    validUntil: "Jun 30, 2026",
    tags: ["rent", "contract", "housing"],
    mimeType: "application/pdf",
    size: "2.1 MB",
  },
  {
    id: 5,
    folderId: 1,
    name: "Dental invoice Q1 2026.pdf",
    category: "Health",
    added: "1 month ago",
    description: "Invoice from dentist for check-up and cleaning.",
    tags: ["invoice", "dental", "health"],
    mimeType: "application/pdf",
    size: "156 KB",
  },
];

export function getDocumentById(id: string | number): DummyDocument | undefined {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(numId)) return undefined;
  return dummyDocuments.find((doc) => doc.id === numId);
}

export function getFolderById(id: string | number): DummyFolder | undefined {
  const numId = typeof id === "string" ? parseInt(id, 10) : id;
  if (Number.isNaN(numId)) return undefined;
  return dummyFolders.find((f) => f.id === numId);
}

export function getDocumentsByFolderId(folderId: string | number): DummyDocument[] {
  const numId = typeof folderId === "string" ? parseInt(folderId, 10) : folderId;
  if (Number.isNaN(numId)) return [];
  return dummyDocuments.filter((doc) => doc.folderId === numId);
}

export function getDocumentCountByFolderId(folderId: number): number {
  return dummyDocuments.filter((doc) => doc.folderId === folderId).length;
}
