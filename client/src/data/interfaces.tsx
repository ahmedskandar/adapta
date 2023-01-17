export interface StatsCardI {
  riskText: string;
  scoreText: string;
  score: string;
  value: number;
}

export interface StatsCardContainerI {
  children: React.ReactNode;
  score: string;
  value: number;
}

export interface StatsCardPrimeI {
  scoreText: string;
}

export interface WrapperI {
  children: React.ReactNode;
}

export interface MetricInfoCardI {
  riskText: string;
  riskPercentage: string;
  color: "red" | "green" | "orange";
}

export interface ChildrenI {
  children: React.ReactNode;
}

export interface ModalOverlayI {
  onClose: () => void;
}

export interface ReportCardI {
  onOpen: () => void;
}

export interface BackdropI {
  onClose: () => void;
}

export interface ButtonI extends ChildrenI {
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.FormEvent) => void | (() => void);
}

export interface FormSliceI {
  form: {
    hasComputed: boolean;
  };
}

export interface ChartI {
  value: number;
  score: string;
}
