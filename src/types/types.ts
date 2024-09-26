export interface InseminationRecord {
  id: number;
  "cow-id": string;
  "insemination-date": string;
  result: string | null | undefined;
  "result-date": string | null | undefined;
  "count-calves": string;
  "count-bulls": string;
}

export interface DisposalRecord {
  id: number;
  "cow-id": string;
  reason: string;
  "disposal-date": string;
}
