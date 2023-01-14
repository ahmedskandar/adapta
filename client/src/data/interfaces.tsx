export interface StatsCardI {
  riskText: string;
  scoreText: string;
}


export interface WrapperI {
  children: React.ReactNode;
}

export interface MetricInfoCardI {
  riskText: string;
  riskPercentage: string; 
  color: 'red' | 'green' | 'orange';
}

