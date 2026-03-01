import type { TStatuses } from "../types/Statuses";

export const statuses: TStatuses[] = [
  { statusValue: 'new', statusTitle: 'Новые' },
  { statusValue: 'rejected', statusTitle: 'Отклонены' },
  { statusValue: 'inspection', statusTitle: 'На рассмотрении' },
  { statusValue: 'atWork', statusTitle: 'В работе' },
  { statusValue: 'waiting', statusTitle: 'Ожидают запчасти' },
  { statusValue: 'done', statusTitle: 'Готовы' },
  { statusValue: 'closed', statusTitle: 'Закрыты' },
  { statusValue: 'all', statusTitle: 'Все статусы' },
]