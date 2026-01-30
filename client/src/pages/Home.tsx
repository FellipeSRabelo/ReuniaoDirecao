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
  Divide,
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
      case "matutino":
        return <MatutinoTab />;
      case "vespertino":
        return <VespertinoTab />;
      case "alunos-novos-primeiro-dia":
        return <AlunosNovosPrimeiroDiaTab />;

      default:
        return <PautaTab />;
    }
  };

  return (
    <div className="flex h-screen bg-blue-800">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      <main className="ml-64 flex-1 overflow-auto relative bg-stone-300">
        {/* Logo centralizada no topo */}
        <div className="flex justify-center pt-6 pb-4 border-b border-stone-500/50">
          <img
            src="https://elisaandreoli.com.br/wp-content/uploads/2023/08/logomarca_cea_sem_fundo.png"
            alt="Colégio Elisa Andreoli"
            className="h-16 w-auto object-contain brightness-110"
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
        <h1 className="text-4xl font-bold text-stone-950 mb-2">
          1ª Reunião Pedagógica
        </h1>
        <p className="text-stone-950">
          03 de Fevereiro de 2026 • Colégio Elisa Andreoli
        </p>
      </div>

      <div className="bg-stone-800 rounded-lg p-8 border border-stone-800 prose prose-invert max-w-none shadow-xl">
        <div className="mb-8 text-center italic border-l-4 border-zinc-600 pl-6 py-4 bg-stone-900/30 rounded-r">
          <p className="text-lg text-stone-200">
            "Ensinar é um exercício de imortalidade. De alguma forma continuamos a viver
            naqueles cujos olhos aprenderam a ver o mundo pela magia da nossa palavra.
            O professor, assim, não morre jamais."
          </p>
          <p className="text-sm text-stone-400 mt-2">— Rubem Alves</p>
        </div>

        <div className="space-y-6">
          <div>
            <p className="text-stone-300"><strong className="text-stone-50">Data:</strong> 03/02/2026</p>
            <p className="text-stone-300"><strong className="text-stone-50">Horário:</strong> 9h</p>
          </div>

          <div>
            <ul className="list-disc list-inside space-y-2 text-stone-300">
              <li>Oração e Reflexão (Capela)</li>
              <li>Avaliação do ano anterior</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-stone-50 mb-3">Objetivo Geral da nossa reunião:</h3>
            <p className="text-stone-300">
              Promover a formação integral dos alunos por meio da implementação de práticas educacionais que integrem valores católicos, 
              desenvolvimento acadêmico e social, fortalecendo a identidade da escola como uma instituição confessional.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Objetivos Específicos:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Desenvolver e implementar um programa de formação contínua para os educadores, focando na vivência e ensino dos valores católicos, 
              além de estratégias pedagógicas inovadoras que melhorem o aprendizado dos alunos.</li>
              <li>Organizar eventos e atividades comunitárias que envolvam alunos, famílias e a comunidade, promovendo a solidariedade, a fé e a 
              participação ativa na vida da escola, reforçando o compromisso com a missão católica da instituição.</li>
              <li>Implementar metodologias ativas de ensino que favoreçam a participação e o engajamento dos alunos, promovendo um ambiente de 
              aprendizagem colaborativa e significativa, alinhado aos valores católicos e aos objetivos pedagógicos da escola.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Dinâmica (Zoraia)</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-foreground">1. LÍDER AUTORITÁRIO</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Toma decisões unilaterais, controla o grupo e impõe regras.</li>
                  <li><strong>Vantagens:</strong> Rápida tomada de decisões, útil em situações de crise.</li>
                  <li><strong>Desvantagens:</strong> Pode gerar resistência e desmotivação entre a equipe.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">2. LÍDER DEMOCRÁTICO</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Incentiva a participação da equipe nas decisões, valoriza a opinião dos membros.</li>
                  <li><strong>Vantagens:</strong> Aumenta o engajamento e a satisfação da equipe, promove um ambiente colaborativo.</li>
                  <li><strong>Desvantagens:</strong> Pode ser mais lento na tomada de decisões.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">3. LÍDER TRANSFORMACIONAL</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Inspira e motiva a equipe a alcançar seu potencial máximo, foca em mudanças e inovação.</li>
                  <li><strong>Vantagens:</strong> Cria um forte senso de propósito, estimula a criatividade e a inovação.</li>
                  <li><strong>Desvantagens:</strong> Requer um alto nível de energia e comprometimento, o que pode ser difícil de sustentar.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">4. LÍDER TRANSACIONAL</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Baseia-se em recompensas e punições para motivar a equipe.</li>
                  <li><strong>Vantagens:</strong> Clareza nas expectativas e resultados, eficaz em ambientes estruturados.</li>
                  <li><strong>Desvantagens:</strong> Pode levar à falta de motivação intrínseca e inovação.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">5. LÍDER SERVIDOR</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Coloca as necessidades da equipe em primeiro lugar, foca no desenvolvimento dos membros.</li>
                  <li><strong>Vantagens:</strong> Cria um ambiente de confiança e apoio, promove o crescimento pessoal e profissional.</li>
                  <li><strong>Desvantagens:</strong> Pode ser visto como falta de assertividade em algumas situações.</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-foreground">6. LÍDER LAISSEZ-FAIRE (deixa rolar)</h4>
                <ul className="list-disc list-inside ml-4 text-sm text-muted-foreground">
                  <li><strong>Características:</strong> Oferece liberdade total à equipe para tomar decisões, intervém minimamente.</li>
                  <li><strong>Vantagens:</strong> Estimula a autonomia e a criatividade.</li>
                  <li><strong>Desvantagens:</strong> Pode levar à falta de direção e desorganização se a equipe não for autônoma.</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Comunicações e informes gerais:</h3>
            <h4 className="font-semibold text-foreground mb-2">Cenário para 2026 (Anexo 1):</h4>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
              <li>Total Rematrícula</li>
              <li>Alunos novos</li>
              <li>Alunos transferidos</li>
              <li>Número de alunos pendentes</li>
              <li>Total de alunos</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-2">Novos Atos Normativos publicados em Diário Oficial:</h4>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li><strong>Lei nº 19.708, de 21 de janeiro de 2026:</strong> Institui a Semana Estadual da Pátria e altera o Anexo Único da Lei nº 18.531, 
              de 2022, que consolida as leis que instituem datas e eventos alusivos no âmbito do Estado de Santa Catarina e estabelece o Calendário Oficial 
              do Estado de Santa Catarina. <span className="text-muted-foreground">(Anexo 2)</span></li>
              <li><strong>Lei nº 19.723, de 22 de janeiro de 2026:</strong> Dispõe sobre a proibição da prática de doutrinação política e ideológica em sala 
              de aula, nas escolas públicas estaduais de Santa Catarina. <span className="text-muted-foreground">(Anexo 3)</span></li>
              <li><strong>Lei nº 19.686, de 21 de janeiro de 2026:</strong> Obriga as instituições de ensino localizadas em território catarinense a dispor 
              de banheiro para cada um dos sexos, masculino e feminino, vedando a instalação e o uso comum de banheiros por estudantes de sexos diferentes. 
              <span className="text-muted-foreground">(Anexo 4)</span></li>
            </ul>
          </div>

          <div>
            <ul className="list-disc list-inside space-y-1 text-foreground">
              <li>Agenda 2026 - Manuais - Site <span className="text-muted-foreground">(Anexo 5)</span></li>
              <li>Primeiro dia de aula, 10/02/2026 - Alunos Novos <span className="text-muted-foreground">(Anexo 6)</span></li>
              <li>Primeiro dia de aula, 11/02/2026 <span className="text-muted-foreground">(Anexo 7)</span></li>
              <li className="text-muted-foreground">(DJ no recreio e sorvete)</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-600/90 to-blue-800/90 p-8 rounded-xl shadow-2xl">
            <h3 className="text-4xl text-center font-bold text-white mb-8 mt-2 tracking-tight">Semana Pedagógica 2026</h3>
            
            <div className="space-y-8">
              {/* Quarta-feira Manhã */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">04/02 (QUARTA-FEIRA) - PERÍODO MATUTINO</h4>
                <ul className="space-y-2 text-white/90 ml-4">
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">8h:</span> <span>Celebração Eucarística (Igreja São Judas Tadeu)</span></li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">9h30min:</span> <span>Coquetel</span></li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">10h30min:</span> <span>Boas-vindas Direção</span></li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">11h:</span> <span>Ir. Valdete</span></li>
                </ul>

                {/* Palestrante Ir. Valdete */}
                <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/valdete.jpg" 
                        alt="Ir. Valdete"
                        className="w-48 h-48 rounded-lg object-cover shadow-xl border-4 border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-yellow-300 mb-2">Tema da Palestra: Campanha da Fraternidade 2026</h5>
                      <p className="text-white/90 text-sm leading-relaxed">
                        A Irmã Valdete é Religiosa da Congregação das Servas de Maria Reparadoras. Possui licenciatura em Filosofia pela Pontifícia Universidade Católica do Paraná - PUC/PR; Bacharelado em Teologia pela Faculdade Jesuíta de Filosofia e Teologia - FAJE/BH; Pós-Graduação em Psicopedagogia pela Universidade do Oeste de Santa Catarina - UNOESC-SC; Mestrado em Teologia Sistemática pela Faculdade Jesuíta de Filosofia e Teologia - FAJE/BH; Doutorado em Teologia Sistemática pela Faculdade Jesuíta de Filosofia e Teologia - FAJE/BH.
                      </p>
                      <p className="text-white/90 text-sm leading-relaxed mt-3">
                        Atualmente, é professora de Teologia Sistemática no Instituto Católico de Estudos Superiores do Piauí. Coordena Cursos de Extensão de "Iniciação teológica" - <em>online</em>, oferecidos pelo ICESPI. Coordena o Grupo de pesquisa "A fé cristã em diálogo com o mundo contemporâneo"; faz parte da "Rede brasileira de teólogas" (RDT); atua na pastoral e formação das comunidades e colabora na formação da CRB - Regional - TE/PI.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quarta-feira Tarde */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">04/02 (QUARTA-FEIRA) - PERÍODO VESPERTINO</h4>
                <ul className="space-y-2 text-white/90 ml-4">
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">13h30min:</span> <span>Reunião com os novos professores</span></li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><span className="text-yellow-300 font-bold">14h:</span> <span>Reunião com as Coordenações:</span></div>
                    <ul className="ml-8 space-y-1 text-sm">
                      <li>• SOR</li>
                      <li>• SOD</li>
                      <li>• Educação Física</li>
                      <li>• Bilíngue</li>
                    </ul>
                  </li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">14h:</span> <span>Reunião do Setor de Psicopedagogia: auxiliares de sala e estagiárias</span></li>
                  <li className="flex flex-col gap-1">
                    <div className="flex items-start gap-2"><span className="text-yellow-300 font-bold">15h:</span> <span>Reunião com as Coordenações:</span></div>
                    <ul className="ml-8 space-y-1 text-sm">
                      <li>• Educação Infantil</li>
                      <li>• Fundamental I</li>
                      <li>• Fundamental II</li>
                    </ul>
                  </li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">16h30min:</span> <span>Ensino Médio</span></li>
                </ul>
              </div>

              {/* Quinta-feira */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">05/02 (QUINTA-FEIRA) - PERÍODO INTEGRAL</h4>
                <div className="text-white/90 ml-4">
                  <p className="text-lg"><span className="text-yellow-300 font-bold">JORNADA PEDAGÓGICA SINEPE</span></p>
                  <p className="text-sm mt-2"><strong>Local:</strong> Arena Opus</p>
                </div>
              </div>

              {/* Sexta-feira Manhã */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">06/02 (SEXTA-FEIRA) - PERÍODO MATUTINO</h4>
                <ul className="space-y-2 text-white/90 ml-4 mb-6">
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">8h:</span> <span>Jeciane Golinhaki</span></li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">10h:</span> <span>Planejamento</span></li>
                </ul>

                {/* Palestrante Jeciane */}
                <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/Jeciane.jpg" 
                        alt="Jeciane Golinhaki"
                        className="w-48 h-48 rounded-lg object-cover shadow-xl border-4 border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-yellow-300 mb-2">Tema da Palestra: Conflitos na Escola: Fugir ou Enfrentar?</h5>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Jeciane Golinhaki é Professora de Direito; Mediadora de Conflitos na educação; Mestra em Sociedade e desenvolvimento; Palestrante e Formadora de gestores e professores; Pesquisadora e autora de livros na área da aprendizagem para Cultura de Paz e cidadania; Co-fundadora e CEO <em>Cittadino Games</em>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sexta-feira Tarde */}
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h4 className="text-2xl font-bold text-white mb-4 border-b border-white/30 pb-2">06/02 (SEXTA-FEIRA) - PERÍODO VESPERTINO</h4>
                <ul className="space-y-2 text-white/90 ml-4 mb-6">
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">14h:</span> <span>Juliana Miranda</span></li>
                  <li className="flex items-start gap-2"><span className="text-yellow-300 font-bold">16h:</span> <span>Planejamento e organização das salas e do material</span></li>
                </ul>

                {/* Palestrante Juliana */}
                <div className="mt-6 bg-white/5 rounded-lg p-6 border border-white/10">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src="https://elisaandreoli.com.br/wp-content/uploads/2026/01/Juliana.jpg" 
                        alt="Juliana Miranda"
                        className="w-48 h-48 rounded-lg object-cover shadow-xl border-4 border-white/20"
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="text-xl font-bold text-yellow-300 mb-2">Tema da Palestra: Violência Contra a Mulher</h5>
                      <p className="text-white/90 text-sm leading-relaxed">
                        Juliana Miranda é Mestre e Doutora em História pela UDESC e Pós-doutora em Patrimônio Cultural e Sociedade pela Univille. Especialista em Educação de Jovens e Adultos pelo IFSC; atua há 22 anos na educação básica, com experiência em docência, orientação pedagógica e supervisão escolar. Possui formações na área de Psicologia analítica e Psicanálise, desenvolvendo pesquisas sobre História de Vida de professoras e professores, História e Imprensa e estudos de gênero. Em 2025, coordenou um cineclube dedicado às temáticas da História das Mulheres, promovendo o diálogo entre educação, cultura e reflexão crítica sobre o papel feminino na Sociedade.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-3">Diretrizes para 2026:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Obrigatoriedade do uso do crachá.</li>
              <li>Os supervisores em 2026 deverão criar uma planilha onde deverão registrar e acompanhar os planejamentos, as avaliações e o controle 
              do material didático. A planilha deverá ser compartilhada com as Coordenações e Direção.</li>
              <li>Os Coordenadores não estão autorizados a alterar a rotina de trabalho, dispensar funcionários ou abonar faltas sem prévia autorização 
              da Direção e do RH.</li>
              <li>A planilha atualizada com a carga horária dos professores e inspetores deve ser apresentada a Direção Pedagógica e, após aprovação e 
              assinatura entregue ao RH.</li>
              <li>Todos deverão participar das Olimpíadas Educacionais, o Colégio dará o devido suporte.</li>
            </ul>
          </div>

          <div className="bg-blue-400/20 p-8 rounded-lg border border-white/20">
            <h3 className="text-3xl text-center font-bold text-blue-400 mb-4">Eventos de 2026:</h3>
            <p className="text-md text-center text-white mb-8">Para cada evento deverá ser elaborado um projeto. Após o evento deverá ser feita a prestação de contas.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-foreground"><strong>02/04:</strong> Retiro dos funcionários</p>
                <p className="text-foreground"><strong>22-24/04:</strong> Semana Literária</p>
                <p className="text-foreground"><strong>25/04:</strong> Encontro Movimento Reparação - Matutino</p>
                <p className="text-foreground"><strong>04-07/05:</strong> Homenagem as mães</p>
                <p className="text-foreground"><strong>09/05:</strong> Dia das Mães no cinema</p>
                <p className="text-foreground"><strong>19/06:</strong> Festa Junina (Fund. II e E.M.)</p>
                <p className="text-foreground"><strong>04/07:</strong> JICEA (S2)</p>
                <p className="text-foreground"><strong>11/07:</strong> JICEA (S2)</p>
                <p className="text-foreground"><strong>12/07:</strong> Festa Junina (Infantil e Fund. I) - Arena Opus</p>
              </div>
              <div className="space-y-2">
                <p className="text-foreground"><strong>03-06/08:</strong> Homenagem aos pais</p>
                <p className="text-foreground"><strong>11/08:</strong> Dia do estudante</p>
                <p className="text-foreground"><strong>15/08:</strong> Dia dos pais no cinema</p>
                <p className="text-foreground"><strong>04/09:</strong> Homenagem cívica - Dia da Independência</p>
                <p className="text-foreground"><strong>15/09:</strong> Missa Nossa Senhora das Dores</p>
                <p className="text-foreground"><strong>26/09:</strong> Movimento e Ação</p>
                <p className="text-foreground"><strong>07-09/10:</strong> Criança Fest</p>
                <p className="text-foreground"><strong>06/11:</strong> Noite da Pizza - Movimento Reparação</p>
                <p className="text-foreground"><strong>14-16/12:</strong> Formaturas e Festa de Natal</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-center italic text-muted-foreground">
              "Se algumas vezes teus esforços parecerem em vão, recomeça com mais amor."
            </p>
            <p className="text-center text-sm text-muted-foreground mt-2">— Madre Elisa Andreoli</p>
            <p className="text-center text-foreground mt-6 font-semibold">Zoraia J. Rabelo da Silveira</p>
            <p className="text-center text-muted-foreground">Diretora Pedagógica</p>
          </div>
        </div>
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
        <div className="bg-card rounded-lg p-6 border-l-4 border-zinc-600">
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
                <p className="text-2xl font-bold text-zinc-600">
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
                <p className="text-2xl font-bold text-zinc-600">
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
                <p className="text-2xl font-bold text-zinc-600">
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

      <div className="bg-card rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-foreground mb-4">LEI Nº 19.708, DE 21 DE JANEIRO DE 2026</h2>
        
        <p className="text-foreground mb-4">
          Institui a Semana Estadual da Pátria e altera o Anexo Único da Lei nº 18.531, de 2022, que consolida as leis que instituem datas e eventos alusivos no âmbito do Estado de Santa Catarina e estabelece o Calendário Oficial do Estado, para incluir referida data alusiva no Calendário Oficial do Estado de Santa Catarina.
        </p>

        <p className="text-muted-foreground mb-6">
          Essa é uma atualização legislativa bem recente. A <strong>Lei nº 19.708</strong>, sancionada em <strong>21 de janeiro de 2026</strong>, tem como objetivo principal reforçar o sentimento cívico no estado de SC através da criação de uma semana dedicada às celebrações da independência e da história nacional.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Principais Pontos da Lei nº 19.708/2026</h3>
        
        <ul className="list-disc list-inside space-y-3 text-foreground">
          <li>
            <strong>Instituição da Semana Estadual da Pátria:</strong> O evento passa a fazer parte do cronograma oficial do estado, ocorrendo anualmente na semana que compreende o dia 7 de setembro.
          </li>
          <li>
            <strong>Alteração na Lei de Consolidação (Lei nº 18.531/2022):</strong> Esta é uma técnica legislativa comum. Em vez de criar uma lei isolada que poderia ser esquecida, o governo estadual a inseriu na lei que "consolida" todas as datas e eventos de Santa Catarina.
          </li>
          <li>
            <strong>Inclusão no Calendário Oficial:</strong> Com isso, órgãos públicos estaduais e escolas podem ter diretrizes específicas para promover atividades culturais, educativas e desfiles durante esse período.
          </li>
        </ul>

        <div className="bg-stone-800 p-6 rounded-lg mt-6">
          <p className="text-foreground mb-4">A consolidação de leis (iniciada em 2022) serve para organizar o emaranhado de datas comemorativas, facilitando a consulta para o cidadão e para a administração pública. A inclusão da "Semana da Pátria" busca:</p>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li><strong>Padronizar celebrações</strong> em todo o território catarinense.</li>
            <li><strong>Fomentar o turismo cívico</strong> e eventos em praças públicas.</li>
            <li><strong>Estimular o ensino de história</strong> e valores republicanos nas redes de ensino.</li>
          </ul>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          Como esta lei acabou de ser publicada, os detalhes sobre a programação específica de 2026 ainda devem ser regulamentados pelos órgãos competentes (como a Secretaria de Educação ou de Cultura).
        </p>
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

      <div className="bg-card rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-foreground mb-4">LEI Nº 19.723, DE 22 DE JANEIRO DE 2026</h2>
        
        <p className="text-foreground mb-6">
          Dispõe sobre a proibição da prática de doutrinação política e ideológica em sala de aula, nas escolas públicas estaduais de Santa Catarina.
        </p>

        <p className="text-muted-foreground mb-6">
          Esta é uma legislação recente e de grande impacto no cenário educacional de Santa Catarina. A Lei nº 19.723, sancionada em 22 de janeiro de 2026, estabelece diretrizes rígidas sobre a conduta de professores e a neutralidade política no ambiente escolar.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Pontos Centrais da Lei</h3>
        
        <p className="text-foreground mb-4">
          A lei foca na premissa da <strong>neutralidade do Estado</strong> e no direito dos pais sobre a educação moral e religiosa de seus filhos. Os principais pilares são:
        </p>

        <ul className="list-disc list-inside space-y-3 text-foreground mb-6">
          <li>
            <strong>Proibição da Doutrinação:</strong> O professor não pode utilizar sua posição para cooptar alunos para correntes políticas, ideológicas ou partidárias.
          </li>
          <li>
            <strong>Pluralismo de Ideias:</strong> Ao tratar de questões políticas, sociais ou econômicas, o docente deve apresentar as principais versões, teorias ou opiniões de forma equitativa.
          </li>
          <li>
            <strong>Liberdade de Consciência:</strong> Fica assegurado o respeito às convicções religiosas e morais dos alunos e de suas famílias.
          </li>
          <li>
            <strong>Neutralidade nas Avaliações:</strong> Questões de provas e processos seletivos não devem induzir o aluno a adotar determinada corrente ideológica para obter a resposta correta.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">Direitos e Deveres</h3>
        
        <p className="text-foreground mb-4">
          A lei cria um equilíbrio delicado entre a <strong>liberdade de cátedra</strong> (o direito do professor de ensinar) e o <strong>limite da exposição ideológica</strong>.
        </p>

        <div className="bg-stone-800 p-6 rounded-lg mb-6">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-stone-600">
                <th className="pb-2 text-foreground">Aspecto</th>
                <th className="pb-2 text-foreground">O que a Lei estabelece</th>
              </tr>
            </thead>
            <tbody className="text-muted-foreground">
              <tr className="border-b border-stone-600">
                <td className="py-3"><strong>Papel do Professor</strong></td>
                <td className="py-3">Deve atuar como um mediador do conhecimento, sem propaganda política.</td>
              </tr>
              <tr className="border-b border-stone-600">
                <td className="py-3"><strong>Papel do Aluno</strong></td>
                <td className="py-3">Tem o direito de não ter sua liberdade de consciência violada.</td>
              </tr>
              <tr>
                <td className="py-3"><strong>Material Didático</strong></td>
                <td className="py-3">Deve ser técnico e científico, evitando panfletagem ideológica.</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-semibold text-foreground mb-3">Contexto e Fiscalização</h3>
        
        <p className="text-sm text-muted-foreground">
          Como a lei é muito recente (janeiro de 2026), a Secretaria de Educação de Santa Catarina deve publicar regulamentações específicas sobre como as denúncias serão processadas e quais as sanções administrativas para o descumprimento.
        </p>
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

      <div className="bg-card rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <h2 className="text-2xl font-bold text-foreground mb-4">LEI Nº 19.686, DE 21 DE JANEIRO DE 2026</h2>
        
        <p className="text-foreground mb-6">
          Obriga as instituições de ensino localizadas em território catarinense a dispor de banheiro para cada um dos sexos, masculino e feminino, vedando a instalação e o uso comum de banheiros por estudantes de sexos diferentes.
        </p>

        <p className="text-muted-foreground mb-6">
          Esta lei catarinense aborda um tema que tem gerado discussões significativas sobre a organização do espaço escolar e a privacidade dos estudantes. Recentemente sancionada, ela estabelece diretrizes claras sobre a infraestrutura sanitária nas escolas do estado.
        </p>

        <h3 className="text-xl font-semibold text-foreground mb-3">Pontos Centrais da Lei nº 19.686/2026</h3>
        
        <ul className="list-disc list-inside space-y-3 text-foreground mb-6">
          <li>
            <strong>Separação por Sexo:</strong> A lei torna obrigatória a existência de banheiros distintos para os sexos masculino e feminino em todas as instituições de ensino (públicas e privadas) em Santa Catarina.
          </li>
          <li>
            <strong>Proibição do "Uso Comum":</strong> Fica expressamente vedada a instalação e o uso de banheiros "unissex" ou de uso comum por estudantes de sexos diferentes.
          </li>
          <li>
            <strong>Abrangência:</strong> A regra aplica-se a todo o território catarinense, incidindo sobre escolas de educação básica até o ensino superior.
          </li>
        </ul>

        <h3 className="text-xl font-semibold text-foreground mb-3">Contexto e Justificativa</h3>
        
        <p className="text-foreground mb-6">
          A legislação geralmente é fundamentada na busca pela <strong>preservação da intimidade</strong> e na <strong>segurança dos alunos</strong> dentro do ambiente escolar. Os defensores dessa medida argumentam que a separação biológica previne situações de desconforto e garante a privacidade individual.
        </p>

        <div className="bg-stone-800 p-6 rounded-lg">
          <h4 className="text-foreground font-semibold mb-3">As instituições de ensino deverão:</h4>
          
          <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
            <li>
              <strong>Revisar sua infraestrutura:</strong> Verificar se o número de banheiros atende à demanda segregada de forma adequada.
            </li>
            <li>
              <strong>Sinalização:</strong> Garantir que a identificação dos espaços esteja clara e de acordo com a nova legislação.
            </li>
          </ul>
        </div>
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
        <h1 className="text-4xl font-bold text-stone-950 text-foreground mb-2">
          Primeiro Dia - Alunos Novos
        </h1>
        <p className="text-muted-foreground text-stone-950">
          10 de Fevereiro de 2026
        </p>
      </div>

      <div className="bg-card bg-stone-800 rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <div className="space-y-6">
          <div className="bg-stone-900/30 border-l-4 border-zinc-600 p-6 rounded">
            <h3 className="text-xl font-bold text-foreground mb-3">Acolhimento dos Alunos Novos - Dia 10 de Fevereiro</h3>
            <p className="text-foreground mb-3">Prezados Colaboradores,</p>
            <p className="text-foreground mb-3">Espero que todos estejam bem e animados.</p>
            <p className="text-foreground mb-3">
              No dia 10 de fevereiro, teremos a alegria de receber nossos novos alunos. Este é um momento crucial para eles, e é fundamental que possamos acolhê-los com muito carinho e atenção.
            </p>
            <p className="text-foreground mb-3">
              Peço que cada um de vocês esteja preparado para oferecer um sorriso acolhedor, ouvir suas dúvidas e ajudá-los a se sentirem à vontade em nossa escola. A primeira impressão é fundamental para que eles se sintam parte de nosso Colégio.
            </p>
            <p className="text-foreground mb-3">
              Estamos confiantes de que, juntos, faremos deste dia uma experiência memorável e especial para nossos novos estudantes.
            </p>
            <p className="text-foreground mb-3">Agradeço pela dedicação e pelo compromisso de sempre.</p>
            <p className="text-foreground">Atenciosamente,</p>
            <p className="text-foreground font-semibold italic">Zoraia J. R. da Silveira</p>
            <p className="text-muted-foreground">Diretora Pedagógica</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6 text-center">PRIMEIRO DIA DE AULA - ALUNOS NOVOS</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-white text-center text-3xl font-bold text-primary mb-4">MATUTINO</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-900/30">
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">ATIVIDADES</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">HORÁRIO</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">LOCAL</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">TURMAS</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">RESPONSÁVEL</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={4}>APRESENTAÇÃO COORDENAÇÃO, DIREÇÃO E DISCIPLINA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">7h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3204</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3205</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ENSINO MÉDIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALAS DE AULA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={4}>FOTO PARA A CARTEIRINHA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ENSINO MÉDIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">10h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={4}>CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ENSINO MÉDIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">10h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>BILÍNGUE / MÚSICA F I</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">7h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3205</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">João Paulo</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3204</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Maria Eduarda</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Eli e Música</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={4}>ELISA AMBIENTAL</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Gabriel</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Mariane</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ENSINO MÉDIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Mariana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>ED. FÍSICA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">9h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ENSINO MÉDIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">QUADRA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º e 7º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">10h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">11h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8º e 9º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BIBLIOTECA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">8h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BIBLIOTECA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º ao 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Fátima</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h4 className="text-white text-center text-3xl font-bold text-primary mt-30 mb-4">VESPERTINO</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse">
                    <thead>
                      <tr className="bg-stone-900/30">
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">ATIVIDADES</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">HORÁRIO</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">LOCAL</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">TURMAS</th>
                        <th className="border text-left text-lg text-gray-100 border-stone-600 p-2 text-left text-foreground">RESPONSÁVEL</th>
                      </tr>
                    </thead>
                    <tbody className="text-muted-foreground">
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>APRESENTAÇÃO COORDENAÇÃO, DIREÇÃO E DISCIPLINA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">13h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3204</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">17h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALAS DE AULA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">18h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALAS DE AULA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Irmã Carmen, Zoraia e Silvana</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>FOTO PARA A CARTEIRINHA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">14h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">14h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">15h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">-</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Allysson e T.I.</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">15h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h50min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">CAPELA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Simone</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>BILÍNGUE / MÚSICA F I</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA 3204</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">João Paulo</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Bilíngue e Música</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">17h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Bilíngue e Música</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>ELISA AMBIENTAL</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">14h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Denise e Magali</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">15h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BOSQUE</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">ED. FÍSICA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">17h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">GINÁSIO</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Carlos</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={3}>MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">15h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">6º, 7º e 8º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">16h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">17h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">SALA MAKER</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Marilda / Júlio</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2" rowSpan={2}>BIBLIOTECA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">14h</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BIBLIOTECA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">3º, 4º e 5º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Fátima</td>
                      </tr>
                      <tr>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">14h30min</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">BIBLIOTECA</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">1º e 2º</td>
                        <td className="border text-left text-gray-100 border-stone-600 p-2">Fátima</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          11 de Fevereiro de 2026
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <div className="space-y-6">
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-foreground font-semibold">HORÁRIO DE CHEGADA AO COLÉGIO: 7h - TODOS OS FUNCIONÁRIOS DO PEDAGÓGICO</p>
          </div>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded">
            <h3 className="text-xl font-bold text-foreground mb-4">ATENÇÃO:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>
                Todos os professores, obedecendo ao horário que será entregue, irão para salas de aula, esperar os alunos, de posse de uma listagem dos alunos matriculados na turma. Na entrada, checar se o nome do aluno está na listagem. Caso não constar o nome do aluno, <strong>PEDIR, GENTILMENTE, PARA QUE ELE SE DIRIJA À SECRETARIA PARA SABER EM QUE TURMA ESTÁ O SEU NOME. NÃO PERMITIR QUE O ALUNO FIQUE EM SALA SE O NOME NÃO ESTIVER NA LISTAGEM.</strong>
              </li>
              <li>
                Se o aluno retornar, só poderá entrar com uma autorização da Secretaria, e então seu nome poderá ser colocado na listagem.
              </li>
              <li>
                A partir das 7h, haverá uma equipe do SOD em cada mural, no pátio, para orientar a chegada dos alunos, que serão encaminhados às salas.
              </li>
              <li>
                A partir das 7h15min, o sinal tocará normalmente, até o recreio os professores deverão passar informações sobre sua disciplina, o primeiro professor entregará a cartela de adesivos.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Depois do recreio, o professor deverá:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Conferir a chamada utilizando a lista de alunos, e comunicar ao Inspetor Disciplinar se ainda não estiver regularizada: número-nome de alunos em sala de acordo com a listagem.</li>
              <li>A lista deve permanecer na sala, e o professor da última aula deve entregá-la ao Inspetor Disciplinar de sua ala.</li>
              <li>Acolher os alunos.</li>
              <li>Orientar sobre as novas regras para o uso dos aparelhos eletrônicos (Vídeo Direção);</li>
              <li>Frisar a importância do <em>CLIPESCOLA</em> para a comunicação família-escola;</li>
              <li>O uso do <em>CLIPESCOLA</em> é obrigatório.</li>
              <li>Passar os horários de entrada, saída e recreio.</li>
              <li>Passar os horários de aula. (REGISTRAR A LÁPIS)</li>
              <li>Abrir o <em>site</em> do Colégio na lousa e conversar sobre o Manual do Aluno.</li>
              <li>Os Professores devem explicitar, em sua 1ª aula, os critérios de avaliação de sua disciplina.</li>
            </ul>
          </div>

          <div className="text-center py-6">
            <p className="text-2xl font-bold text-primary">BOM ANO!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - EDUCAÇÃO INFANTIL - MATUTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 8h às 8h45min</li>
                <li>2ª aula: 8h45min às 9h30min</li>
                <li className="font-semibold text-primary">RECREIO: 9h30min às 9h50min</li>
                <li>3ª aula: 9h50min às 10h35min</li>
                <li>4ª aula: 10h35min às 11h20min</li>
                <li>5ª aula: 11h20min às 12h05min</li>
              </ul>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - ENSINO FUNDAMENTAL I (1º ao 5º ano) - MATUTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 7h15min às 8h</li>
                <li>2ª aula: 8h às 8h45min</li>
                <li>3ª aula: 8h45min às 9h30min</li>
                <li className="font-semibold text-primary">RECREIO: 9h30min às 9h50min</li>
                <li>4ª aula: 9h50min às 10h35min</li>
                <li>5ª aula: 10h35min às 11h20min</li>
                <li>6ª aula: 11h20min às 12h05min</li>
              </ul>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg md:col-span-2">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - ENSINO FUNDAMENTAL II (6º ao 9º ano) e ENSINO MÉDIO - MATUTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 7h15min às 8h</li>
                <li>2ª aula: 8h às 8h45min</li>
                <li>3ª aula: 8h45min às 9h30min</li>
                <li>4ª aula: 9h30min às 10h15min</li>
                <li className="font-semibold text-primary">RECREIO: 10h15min às 10h35min</li>
                <li>5ª aula: 10h35min às 11h20min</li>
                <li>6ª aula: 11h20min às 12h05min</li>
              </ul>
            </div>
          </div>
        </div>
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
          11 de Fevereiro de 2026
        </p>
      </div>

      <div className="bg-card rounded-lg p-8 border border-border prose prose-invert max-w-none">
        <div className="space-y-6">
          <div className="bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded">
            <p className="text-foreground font-semibold">HORÁRIO DE CHEGADA AO COLÉGIO: 13h - TODOS OS FUNCIONÁRIOS DO PEDAGÓGICO</p>
          </div>

          <div className="bg-red-900/20 border-l-4 border-red-500 p-6 rounded">
            <h3 className="text-xl font-bold text-foreground mb-4">ATENÇÃO:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>
                Todos os professores, obedecendo ao horário que será entregue, irão para salas de aula, esperar os alunos, de posse de uma listagem dos alunos matriculados na turma. Na entrada, checar se o nome do aluno está na listagem. Caso não constar o nome do aluno, <strong>PEDIR, GENTILMENTE, PARA QUE ELE SE DIRIJA À SECRETARIA PARA SABER EM QUE TURMA ESTÁ O SEU NOME. NÃO PERMITIR QUE O ALUNO FIQUE EM SALA SE O NOME NÃO ESTIVER NA LISTAGEM.</strong>
              </li>
              <li>
                Se o aluno retornar, só poderá entrar com uma autorização da Secretaria, e então seu nome poderá ser colocado na listagem.
              </li>
              <li>
                A partir das 13h15min, haverá uma equipe do SOD em cada mural, no pátio, para orientar a chegada dos alunos, que serão encaminhados às salas.
              </li>
              <li>
                A partir das 13h30min, o sinal tocará normalmente, até o recreio os professores deverão passar informações sobre sua disciplina.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-foreground mb-3">Depois do recreio, o professor deverá:</h3>
            <ul className="list-disc list-inside space-y-2 text-foreground">
              <li>Conferir a chamada utilizando a lista de alunos, e comunicar ao Inspetor Disciplinar se ainda não estiver regularizada: número-nome de alunos em sala de acordo com a listagem.</li>
              <li>A lista deve permanecer na sala, e o professor da última aula deve entregá-la ao Inspetor Disciplinar de sua ala.</li>
              <li>Acolher os alunos.</li>
              <li>Orientar sobre as novas regras para o uso dos aparelhos eletrônicos (Vídeo Direção);</li>
              <li>Frisar a importância do <em>CLIPESCOLA</em> para a comunicação família-escola;</li>
              <li>O uso do <em>CLIPESCOLA</em> é obrigatório.</li>
              <li>Passar os horários de entrada, saída e recreio.</li>
              <li>Passar os horários de aula. (REGISTRAR A LÁPIS)</li>
              <li>Abrir o <em>site</em> do Colégio na lousa e conversar sobre o Manual do Aluno.</li>
              <li>Os Professores devem explicitar, em sua 1ª aula, os critérios de avaliação de sua disciplina.</li>
            </ul>
          </div>

          <div className="text-center py-6">
            <p className="text-2xl font-bold text-primary">BOM ANO!</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-stone-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - EDUCAÇÃO INFANTIL - VESPERTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 13h30min às 14h15min</li>
                <li>2ª aula: 14h15min às 15h</li>
                <li>3ª aula: 15h às 15h45min</li>
                <li className="font-semibold text-primary">RECREIO: 15h45min às 16h05min</li>
                <li>4ª aula: 16h05min às 16h50min</li>
                <li>5ª aula: 16h50min às 17h35min</li>
              </ul>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - ENSINO FUNDAMENTAL I (1º ao 5º ano) - VESPERTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 13h30min às 14h15min</li>
                <li>2ª aula: 14h15min às 15h</li>
                <li>3ª aula: 15h às 15h45min</li>
                <li className="font-semibold text-primary">RECREIO: 15h45min às 16h05min</li>
                <li>4ª aula: 16h05min às 16h50min</li>
                <li>5ª aula: 16h50min às 17h35min</li>
                <li>6ª aula: 17h35min às 18h20min</li>
              </ul>
            </div>

            <div className="bg-stone-800 p-6 rounded-lg md:col-span-2">
              <h4 className="text-lg font-semibold text-foreground mb-4">HORÁRIO - ENSINO FUNDAMENTAL II (6º ao 9º ano) e ENSINO MÉDIO - VESPERTINO</h4>
              <ul className="space-y-1 text-muted-foreground">
                <li>1ª aula: 13h30min às 14h15min</li>
                <li>2ª aula: 14h15min às 15h</li>
                <li>3ª aula: 15h às 15h45min</li>
                <li>4ª aula: 15h45min às 16h30min</li>
                <li className="font-semibold text-primary">RECREIO: 16h30min às 16h50min</li>
                <li>5ª aula: 16h50min às 17h35min</li>
                <li>6ª aula: 17h35min às 18h20min</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
