import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCard";
import ClassTable from "@/components/ClassTable";
import { Button } from "@/components/ui/button";
import {
  enrollmentSummary,
  newStudentsData,
  totalStudentsData,
  rematrikulationData,
} from "@/data/enrollment-data";
import { documents } from "@/data/documents";
import {
  Users,
  CheckCircle,
  AlertCircle,
  Download,
  FileText,
  ExternalLink,
} from "lucide-react";

/**
 * Design Philosophy: Minimalismo Corporativo
 * - Fundo gray-900 (oklch(0.1 0 0))
 * - Acentos azuis corporativos (oklch(0.565 0.214 259.815))
 * - Sidebar fixa com navegação e submenus
 * - Cards com sombras mínimas e bordas esquerda coloridas
 * - Tipografia clara com hierarquia bem definida
 * - Foco total no conteúdo sem distrações
 * - Logo no canto superior direito
 */

export default function Home() {
  const [activeTab, setActiveTab] = useState("pauta");

  const renderContent = () => {
    switch (activeTab) {
      // Início
      case "pauta":
        return <PautaTab />;

      // Matrículas
      case "overview":
        return <OverviewTab />;
      case "new-students":
        return <NewStudentsTab />;
      case "total-students":
        return <TotalStudentsTab />;
      case "rematriculation":
        return <RematrikulationTab />;
      case "documents":
        return <DocumentsTab />;

      // Novas Leis 2026
      case "lei-19708":
        return <Lei19708Tab />;
      case "resumo-19708":
        return <Resumo19708Tab />;
      case "lei-19723":
        return <Lei19723Tab />;
      case "resumo-19723":
        return <Resumo19723Tab />;
      case "lei-19686":
        return <Lei19686Tab />;
      case "resumo-19686":
        return <Resumo19686Tab />;

      // Manual do Aluno
      case "manual-infantil":
        return <ManualInfantilTab />;
      case "manual-fundamental":
        return <ManualFundamentalTab />;

      // Primeiro dia de aula
      case "alunos-novos-primeiro-dia":
        return <AlunosNovosPrimeiroDiaTab />;
      case "matutino":
        return <MatutinoTab />;
      case "vespertino":
        return <VespertinoTab />;

      default:
        return <PautaTab />;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-auto relative">
        {/* Logo no canto superior direito */}
        <div className="fixed top-6 right-8 z-10">
          <img
            src="https://elisaandreoli.com.br/wp-content/uploads/2023/08/logomarca_cea_sem_fundo.png"
            alt="Colégio Elisa Andreoli"
            className="h-12 w-auto object-contain"
          />
        </div>

        <div className="p-8 pt-20">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

// ============ INÍCIO ============
function PautaTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Pauta da Reunião
        </h1>
        <p className="text-muted-foreground">
          Colégio Elisa Andreoli • Período: 2026 - 1º Semestre
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-border">
        <p className="text-muted-foreground">
          Arquivo não disponível no momento. Será adicionado em breve.
        </p>
      </div>
    </div>
  );
}

// ============ MATRÍCULAS ============
function OverviewTab() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Matrículas 2026
        </h1>
        <p className="text-muted-foreground">
          Colégio Elisa Andreoli • Período: 2026 - 1º Semestre
        </p>
      </div>

      {/* Confirmed Enrollments */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Matrículas Confirmadas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Rematrículas"
            value={enrollmentSummary.confirmed.rematriculas}
            subtitle="Alunos que continuam na instituição"
            icon={Users}
            variant="success"
          />
          <StatCard
            title="Alunos Novos"
            value={enrollmentSummary.confirmed.newStudents}
            subtitle="Novas matrículas confirmadas"
            icon={CheckCircle}
          />
          <StatCard
            title="Total Confirmado"
            value={enrollmentSummary.confirmed.total}
            subtitle="Matrículas ativas"
            icon={CheckCircle}
            variant="success"
          />
        </div>
      </section>

      {/* Pending Enrollments */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Matrículas Pendentes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard
            title="Em Negociação"
            value={enrollmentSummary.pending.negotiation}
            subtitle="Aguardando confirmação"
            icon={AlertCircle}
            variant="warning"
          />
          <StatCard
            title="Sem Pendências"
            value={enrollmentSummary.pending.noPending}
            subtitle="Documentação completa"
            icon={CheckCircle}
            variant="success"
          />
          <StatCard
            title="Alunos Novos"
            value={enrollmentSummary.pending.newStudents}
            subtitle="Novos em análise"
            icon={Users}
          />
          <StatCard
            title="Total Pendente"
            value={enrollmentSummary.pending.total}
            subtitle="Aguardando resolução"
            icon={AlertCircle}
            variant="warning"
          />
        </div>
      </section>

      {/* Not Fidelized */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Não Fidelizados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatCard
            title="Pediram Transferência"
            value={enrollmentSummary.notFidelized.transferRequest}
            subtitle="Solicitações de saída"
            icon={AlertCircle}
            variant="danger"
          />
          <StatCard
            title="Sem Manifestação"
            value={enrollmentSummary.notFidelized.noResponse}
            subtitle="Sem resposta até o momento"
            icon={AlertCircle}
            variant="warning"
          />
          <StatCard
            title="Total Não Fidelizado"
            value={enrollmentSummary.notFidelized.total}
            subtitle="Alunos em risco"
            icon={AlertCircle}
            variant="danger"
          />
        </div>
      </section>

      {/* General Summary */}
      <section>
        <h2 className="text-2xl font-semibold text-foreground mb-4">
          Resumo Geral
        </h2>
        <div className="bg-card rounded-lg p-6 border-l-4 border-blue-500">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div>
              <p className="text-muted-foreground text-sm mb-1">Total Geral</p>
              <p className="text-3xl font-bold text-foreground">2199</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">
                Taxa de Confirmação
              </p>
              <p className="text-3xl font-bold text-green-500">97%</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">
                Taxa de Fidelização
              </p>
              <p className="text-3xl font-bold text-green-500">96%</p>
            </div>
            <div>
              <p className="text-muted-foreground text-sm mb-1">
                Atualizado em
              </p>
              <p className="text-sm font-semibold text-foreground">28/01/26</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function NewStudentsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Mapa de Turmas - Alunos Novos
        </h1>
        <p className="text-muted-foreground">
          Distribuição de alunos novos por turma (Período: 2026 - 1º Semestre)
        </p>
      </div>

      {newStudentsData.map((section) => (
        <section key={section.name}>
          <div className="bg-card rounded-lg p-6 mb-4 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {section.name}
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-muted-foreground text-sm">Total de Turmas</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalClasses}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total de Alunos</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalStudents}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Masculino</p>
                <p className="text-2xl font-bold text-blue-500">
                  {section.maleTotal}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Feminino</p>
                <p className="text-2xl font-bold text-pink-500">
                  {section.femaleTotal}
                </p>
              </div>
            </div>
            <ClassTable data={[section]} />
          </div>
        </section>
      ))}
    </div>
  );
}

function TotalStudentsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Mapa de Turmas - Total de Alunos
        </h1>
        <p className="text-muted-foreground">
          Distribuição total de alunos por turma (Período: 2026 - 1º Semestre)
        </p>
      </div>

      {totalStudentsData.map((section) => (
        <section key={section.name}>
          <div className="bg-card rounded-lg p-6 mb-4 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {section.name}
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-muted-foreground text-sm">Total de Turmas</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalClasses}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total de Alunos</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalStudents}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Masculino</p>
                <p className="text-2xl font-bold text-blue-500">
                  {section.maleTotal}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Feminino</p>
                <p className="text-2xl font-bold text-pink-500">
                  {section.femaleTotal}
                </p>
              </div>
            </div>
            <ClassTable data={[section]} />
          </div>
        </section>
      ))}
    </div>
  );
}

function RematrikulationTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Mapa de Turmas - Rematrícula
        </h1>
        <p className="text-muted-foreground">
          Distribuição de alunos em rematrícula por turma (Período: 2026 - 1º
          Semestre)
        </p>
      </div>

      {rematrikulationData.map((section) => (
        <section key={section.name}>
          <div className="bg-card rounded-lg p-6 mb-4 border border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">
              {section.name}
            </h2>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-muted-foreground text-sm">Total de Turmas</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalClasses}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Total de Alunos</p>
                <p className="text-2xl font-bold text-foreground">
                  {section.totalStudents}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Masculino</p>
                <p className="text-2xl font-bold text-blue-500">
                  {section.maleTotal}
                </p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Feminino</p>
                <p className="text-2xl font-bold text-pink-500">
                  {section.femaleTotal}
                </p>
              </div>
            </div>
            <ClassTable data={[section]} />
          </div>
        </section>
      ))}
    </div>
  );
}

function DocumentsTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Documentos de Matrícula
        </h1>
        <p className="text-muted-foreground">
          Relatórios e mapas de turmas para download
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {documents.map((doc, index) => (
          <a
            key={index}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card rounded-lg p-6 border border-border hover:border-primary transition-colors group"
          >
            <div className="flex items-start justify-between mb-4">
              <FileText className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {doc.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">{doc.description}</p>
            <Button
              variant="outline"
              size="sm"
              className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            >
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
}

// ============ NOVAS LEIS 2026 ============
function Lei19708Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Lei Nº 19.708
        </h1>
        <p className="text-muted-foreground">
          Institui a Semana Estadual da Pátria
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/Lei-19708-Institui-a-Semana-Estadual-da-Patria.pdf"
          className="w-full h-screen rounded-lg"
          title="Lei 19.708"
        />
      </div>
    </div>
  );
}

function Resumo19708Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Resumo da Lei 19.708
        </h1>
        <p className="text-muted-foreground">
          Semana Estadual da Pátria
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/LEI-N-19.708-DE-21-DE-JANEIRO-DE-2026-semana-estadual-da-patria.pdf"
          className="w-full h-screen rounded-lg"
          title="Resumo Lei 19.708"
        />
      </div>
    </div>
  );
}

function Lei19723Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Lei nº 19.723
        </h1>
        <p className="text-muted-foreground">
          Doutrinação Política e Ideológica
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/Lei-19723-doutrinacao-politica-e-ideologica.pdf"
          className="w-full h-screen rounded-lg"
          title="Lei 19.723"
        />
      </div>
    </div>
  );
}

function Resumo19723Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Resumo da Lei 19.723
        </h1>
        <p className="text-muted-foreground">
          Doutrinação Política e Ideológica
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/LEI-N-19.723-DE-22-DE-JANEIRO-DE-2026-doutrinacao-politica-e-ideologica.pdf"
          className="w-full h-screen rounded-lg"
          title="Resumo Lei 19.723"
        />
      </div>
    </div>
  );
}

function Lei19686Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Lei nº 19.686
        </h1>
        <p className="text-muted-foreground">
          Banheiros Masculino e Feminino
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/Lei-19686-banheiros-masculino-e-feminino.pdf"
          className="w-full h-screen rounded-lg"
          title="Lei 19.686"
        />
      </div>
    </div>
  );
}

function Resumo19686Tab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Resumo da Lei 19.686
        </h1>
        <p className="text-muted-foreground">
          Banheiros Masculino e Feminino
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/LEI-N-19.686-DE-21-DE-JANEIRO-DE-2026-banheiros-masculino-e-feminino.pdf"
          className="w-full h-screen rounded-lg"
          title="Resumo Lei 19.686"
        />
      </div>
    </div>
  );
}

// ============ MANUAL DO ALUNO ============
function ManualInfantilTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Manual do Aluno - Infantil
        </h1>
        <p className="text-muted-foreground">
          Informações importantes para alunos da Educação Infantil
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-border">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2025/12/Manual-Infantil-2026.pdf"
          className="w-full h-screen rounded-lg"
          title="Manual do Aluno - Infantil"
        />
      </div>
    </div>
  );
}

function ManualFundamentalTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Manual do Aluno
        </h1>
        <p className="text-muted-foreground">
          Informações importantes para alunos do Fundamental e Médio
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-border">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2025/12/Manual-Fundamental-e-Medio-2026.pdf"
          className="w-full h-screen rounded-lg"
          title="Manual do Aluno - Fundamental e Médio"
        />
      </div>
    </div>
  );
}

// ============ PRIMEIRO DIA DE AULA ============
function AlunosNovosPrimeiroDiaTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Primeiro Dia - Alunos Novos
        </h1>
        <p className="text-muted-foreground">
          Informações para alunos novos no primeiro dia de aula
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/PRIMEIRO-DIA-ALUNOS-NOVOS.pdf"
          className="w-full h-screen rounded-lg"
          title="Primeiro Dia - Alunos Novos"
        />
      </div>
    </div>
  );
}

function MatutinoTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Primeiro Dia de Aula - Matutino
        </h1>
        <p className="text-muted-foreground">
          Informações para o turno matutino
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/1-DIA-DE-AULA-2026-Matutino.pdf"
          className="w-full h-screen rounded-lg"
          title="Primeiro Dia - Matutino"
        />
      </div>
    </div>
  );
}

function VespertinoTab() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          Primeiro Dia de Aula - Vespertino
        </h1>
        <p className="text-muted-foreground">
          Informações para o turno vespertino
        </p>
      </div>

      <div className="bg-card rounded-lg border border-border overflow-hidden">
        <iframe
          src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/1-DIA-DE-AULA-2026-Vespertino.pdf"
          className="w-full h-screen rounded-lg"
          title="Primeiro Dia - Vespertino"
        />
      </div>
    </div>
  );
}
