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
        <div key={section.name} className="bg-card rounded-lg overflow-hidden shadow-sm">
          {/* Section Header */}
          <div className="bg-secondary px-6 py-4 border-b border-border">
            <h3 className="text-lg font-semibold text-card-foreground">
              {section.name}
            </h3>
            <div className="grid grid-cols-4 gap-4 mt-3 text-sm">
              <div>
                <p className="text-muted-foreground text-xs">Total de Turmas</p>
                <p className="font-bold text-card-foreground">{section.totalClasses}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Total de Alunos</p>
                <p className="font-bold text-card-foreground">{section.totalStudents}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Masculino</p>
                <p className="font-bold text-card-foreground">{section.maleTotal}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs">Feminino</p>
                <p className="font-bold text-card-foreground">{section.femaleTotal}</p>
              </div>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-border hover:bg-transparent">
                  <TableHead className="text-muted-foreground font-semibold">
                    Turma
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold">
                    Turno
                  </TableHead>
                  <TableHead className="text-muted-foreground font-semibold">
                    Sala
                  </TableHead>
                  <TableHead className="text-right text-muted-foreground font-semibold">
                    Total
                  </TableHead>
                  <TableHead className="text-right text-muted-foreground font-semibold">
                    Masc.
                  </TableHead>
                  <TableHead className="text-right text-muted-foreground font-semibold">
                    Fem.
                  </TableHead>
                  <TableHead className="text-right text-muted-foreground font-semibold">
                    Outros
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {section.classes.map((cls, idx) => (
                  <TableRow
                    key={idx}
                    className="border-b border-border hover:bg-secondary/50 transition-colors"
                  >
                    <TableCell className="font-medium text-card-foreground">
                      {cls.course}
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {cls.shift}
                    </TableCell>
                    <TableCell className="text-card-foreground">
                      {cls.classroom}
                    </TableCell>
                    <TableCell className="text-right font-semibold text-card-foreground">
                      {cls.totalStudents}
                    </TableCell>
                    <TableCell className="text-right text-card-foreground">
                      {cls.male}
                    </TableCell>
                    <TableCell className="text-right text-card-foreground">
                      {cls.female}
                    </TableCell>
                    <TableCell className="text-right text-card-foreground">
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
