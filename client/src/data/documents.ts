export interface Document {
  title: string;
  description: string;
  url: string;
  icon?: string;
}

export const documents: Document[] = [
  {
    title: "Relatório de Matrículas e Pendências",
    description: "Documento com detalhes sobre matrículas confirmadas e pendências",
    url: "https://elisaandreoli.com.br/wp-content/uploads/2026/01/RELATORIO-MATRICULAS-E-PENDENCIAS-2026.pdf",
  },
  {
    title: "Mapa de Turmas - Alunos Novos",
    description: "Planilha com distribuição de alunos novos",
    url: "https://elisaandreoli.com.br/wp-content/uploads/2026/01/MAPA-DE-TURMA-ALUNOS-NOVOS.pdf",
  },
  {
    title: "Mapa de Turmas - Total de Alunos",
    description: "Planilha com total de alunos por turma",
    url: "https://elisaandreoli.com.br/wp-content/uploads/2026/01/MAPA-DE-TURMAS-TOTAL-DE-ALUNOS.pdf",
  },
  {
    title: "Mapa de Turmas - Rematrícula",
    description: "Planilha com dados de rematrícula",
    url: "https://elisaandreoli.com.br/wp-content/uploads/2026/01/MAPA-DE-TURMAS-REMATRICULA.pdf",
  },
];
