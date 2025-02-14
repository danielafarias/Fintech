import React from 'react'
import { useData } from '../Context/DataContext';

type MonthBtnProps = {
  n: number;
};

const style: React.CSSProperties = {
  padding: "var(--gap) var(--gap-s)",
  backgroundColor: "var(--color-3)",
  border: "none",
  borderRadius: "var(--gap)",
  color: "var(--color-2)",
  fontWeight: "600",
  textTransform: "capitalize"
};

function getMonth(n: number) {
  const date = new Date();
  const month = date.getMonth() + n;

  date.setMonth(month);

  return date;
}

function monthName(n: number) {
  const date = getMonth(n);
  const name = Intl.DateTimeFormat("pt-BR", { month: 'long' }).format(date);

  return name;
}

function formatDate(date: Date) {
  const dd = String(date.getDate()).padStart(2, '0');
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${yyyy}-${mm}-${dd}`
}

export const MonthBtn = ({ n }: MonthBtnProps) => {
  const { setInitialDate, setFinalDate } = useData();

  function setMonthDates(n: number) {
    const date = getMonth(n);

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    setInitialDate(formatDate(firstDay));
    setFinalDate(formatDate(lastDay));
  }

  return (
    <button 
      style={style}
      onClick={() => setMonthDates(n)}
    >
      {monthName(n)}
    </button>
  )
}
