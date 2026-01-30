import { useState, useEffect } from "react";
import { BarChart3, FileText, Home, Users, ChevronDown, BookOpen, Scale, GraduationCap, Calendar, Smartphone, SmartphoneIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>("inicio");

  const navItems = [
    {
      id: "inicio",
      label: "Início",
      icon: Home,
      submenu: [
        { id: "pauta", label: "Pauta da Reunião" },
      ],
    },
    {
      id: "matriculas",
      label: "Matrículas",
      icon: Users,
      submenu: [
        { id: "overview", label: "Visão Geral" },
        { id: "rematriculation", label: "Rematrícula" },
        { id: "new-students", label: "Alunos Novos" },
        { id: "total-students", label: "Total de Alunos" },
        
      ],
    },
    {
      id: "novas-leis",
      label: "Novas Leis 2026",
      icon: Scale,
      submenu: [
        { id: "lei-19708", label: "Lei Nº 19.708" },
        { id: "resumo-19708", label: "Resumo da Lei 19.708" },
        { id: "lei-19723", label: "Lei nº 19.723" },
        { id: "resumo-19723", label: "Resumo da Lei 19.723" },
        { id: "lei-19686", label: "Lei nº 19.686" },
        { id: "resumo-19686", label: "Resumo da Lei 19.686" },
      ],
    },
    {
      id: "manual-aluno",
      label: "Manual do Aluno",
      icon: BookOpen,
      submenu: [
        { id: "manual-infantil", label: "Manual do Aluno Inf" },
        { id: "manual-fundamental", label: "Manual do Aluno" },
      ],
    },
    {
      id: "primeiro-dia",
      label: "Primeiro dia de aula",
      icon: Calendar,
      submenu: [
        { id: "matutino", label: "Matutino" },
        { id: "vespertino", label: "Vespertino" },
        { id: "alunos-novos-primeiro-dia", label: "Alunos novos" },
      ],
    },
    {
      id: "novo-app",
      label: "Novo APP TI",
      icon: Smartphone,
      submenu: [
        { id: "novo-app-ti", label: "Vídeo Demonstração" },
      ],
    },
  ];

  // Encontrar o menu pai de um submenu item baseado no activeTab
  useEffect(() => {
    const parentMenu = navItems.find(item => 
      item.submenu?.some(sub => sub.id === activeTab)
    );
    
    if (parentMenu && expandedMenu !== parentMenu.id) {
      setExpandedMenu(parentMenu.id);
    }
  }, [activeTab]);

  const toggleMenu = (menuId: string) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId);
  };

  return (
    <aside className="hidden md:fixed md:left-0 md:top-0 md:h-screen md:w-64 md:flex md:flex-col bg-zinc-800 border-r border-zinc-800 shadow-2xl">
      {/* Header */}
      <div className="p-6 border-b border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-400 flex items-center justify-center shadow-lg">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-stone-50">
              Coordenação
            </h1>
            <p className="text-xs text-white">Elisa Andreoli</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedMenu === item.id;
          const hasSubmenu = item.submenu && item.submenu.length > 0;

          if (hasSubmenu) {
            return (
              <div key={item.id}>
                <button
                  onClick={() => toggleMenu(item.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200",
                    isExpanded
                      ? "bg-blue-500 text-white font-medium shadow-lg"
                      : "text-zinc-50 hover:bg-blue-500 hover:text-zinc-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{item.label}</span>
                  </div>
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      isExpanded ? "rotate-180" : ""
                    )}
                  />
                </button>

                {/* Submenu */}
                {isExpanded && (
                  <div className="ml-4 mt-1 space-y-1 border-l border-zinc-700">
                    {item.submenu.map((subitem) => (
                      <button
                        key={subitem.id}
                        onClick={() => onTabChange(subitem.id)}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-2 rounded-lg text-sm transition-all duration-200 pl-6",
                          activeTab === subitem.id
                            ? "bg-blue-500 text-white font-medium shadow-md"
                            : "text-zinc-50 hover:bg-blue-500 hover:text-zinc-200"
                        )}
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-current" />
                        {subitem.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all duration-200",
                activeTab === item.id
                  ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm">{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
        <p className="text-xs text-zinc-500 text-center">
          Período: 2026 - 1º Semestre
        </p>
        <p className="text-xs text-zinc-500 text-center mt-1">
          Atualizado: 28/01/2026
        </p>
      </div>
    </aside>
  );
}
