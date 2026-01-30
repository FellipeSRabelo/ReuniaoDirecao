import { ClassData, CourseSection } from "@/data/enrollment-data";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface ClassTableProps {
  data: CourseSection[];
}

export default function ClassTable({ data }: ClassTableProps) {
  return (
    <div className="space-y-8">
      {data.map((section) => (
        <div key={section.name} className="bg-slate-900/50 rounded-lg overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="bg-slate-800 px-6 py-4 border-b border-slate-700">
            <h3 className="text-lg font-semibold text-slate-50">
              {section.name}
            </h3>
            <div className="grid grid-cols-4 gap-4 mt-3 text-sm">
              <div>
                <p className="text-slate-400 text-xs">Total de Turmas</p>
                <p className="font-bold text-slate-50">{section.totalClasses}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Total de Alunos</p>
                <p className="font-bold text-slate-50">{section.totalStudents}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Masculino</p>
                <p className="font-bold text-slate-50">{section.maleTotal}</p>
              </div>
              <div>
                <p className="text-slate-400 text-xs">Feminino</p>
                <p className="font-bold text-slate-50">{section.femaleTotal}</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-slate-700 hover:bg-transparent">
                  <TableHead className="text-slate-400 font-semibold">
                    Turma
                  </TableHead>
                  <TableHead className="text-slate-400 font-semibold">
                    Turno
                  </TableHead>
                  <TableHead className="text-slate-400 font-semibold">
                    Sala
                  </TableHead>
                  <TableHead className="text-right text-slate-400 font-semibold">
                    Total
                  </TableHead>
                  <TableHead className="text-right text-slate-400 font-semibold">
                    Masc.
                  </TableHead>
                  <TableHead className="text-right text-slate-400 font-semibold">
                    Fem.
                  </TableHead>
                  <TableHead className="text-right text-slate-400 font-semibold">
                    Outros
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.classes.map((cls, idx) => (
                  <TableRow
                    key={idx}
                    className="border-b border-slate-700 hover:bg-slate-800/50 transition-colors"
                  >
                    <TableCell className="font-medium text-slate-50">
                      {cls.course}
                    </TableCell>
                    <TableCell className="text-slate-50">
                      {cls.shift}
                    </TableCell>
                    <TableCell className="text-slate-50">
                      {cls.classroom}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-slate-50">
                      {cls.totalStudents}
                    </TableCell>
                    <TableCell className="text-right text-slate-50">
                      {cls.male}
                    </TableCell>
                    <TableCell className="text-right text-slate-50">
                      {cls.female}
                    </TableCell>
                    <TableCell className="text-right text-slate-50">
                      {cls.others}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      ))}
    </div>
  );
}
