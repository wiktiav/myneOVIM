import styles from "@styles/LoadingInfobar.module.css";

export interface StockInfo {
  StockName: string;
  StartingPrice: number;
  CurrentPrice: number;
}

function calculateCount(): number {
  const now = new Date();
  const dayOfWeek = now.getDay();
  const hour = now.getHours();
  const minute = now.getMinutes();

  // Check if current time is on a weekday between 9:00 am and 4:00 pm
  if (dayOfWeek >= 1 && dayOfWeek <= 5 && hour >= 9 && hour < 16) {
    // Calculate minutes since 9:00 am
    const minutesSinceStart = (hour - 9) * 60 + minute;

    // Determine the number of 5.2 minute intervals that have passed since 9:00 am
    const intervalsSinceStart = Math.floor(minutesSinceStart / 5.2);

    // Determine the next