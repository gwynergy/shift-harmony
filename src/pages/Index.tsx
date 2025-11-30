import { Activity, Users, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

// Mock data for demonstration
const nurses = [
  { id: 1, name: "Sarah Chen", workload: 85, patients: 6, status: "high" },
  { id: 2, name: "Michael Torres", workload: 45, patients: 4, status: "balanced" },
  { id: 3, name: "Emily Rodriguez", workload: 92, patients: 7, status: "critical" },
  { id: 4, name: "James Kim", workload: 58, patients: 5, status: "balanced" },
  { id: 5, name: "Lisa Martinez", workload: 38, patients: 3, status: "low" },
];

const wardBalance = 68;

const getStatusColor = (status: string) => {
  switch (status) {
    case "critical":
      return "bg-destructive";
    case "high":
      return "bg-warning";
    case "balanced":
      return "bg-success";
    case "low":
      return "bg-muted";
    default:
      return "bg-muted";
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "critical":
      return <Badge variant="destructive">Critical Load</Badge>;
    case "high":
      return <Badge variant="warning">High Load</Badge>;
    case "balanced":
      return <Badge variant="success">Balanced</Badge>;
    case "low":
      return <Badge variant="secondary">Light Load</Badge>;
    default:
      return <Badge variant="secondary">Unknown</Badge>;
  }
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80">
                <Activity className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Harmony</h1>
                <p className="text-xs text-muted-foreground">Ward 3B - Day Shift</p>
              </div>
            </div>
            <Badge variant="outline" className="text-xs">
              Live
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Ward Overview */}
        <Card className="p-6 shadow-[var(--shadow-card)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-1">Ward Balance</h2>
              <p className="text-sm text-muted-foreground">Overall workload distribution</p>
            </div>
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-primary" />
              <span className="text-2xl font-bold text-foreground">{wardBalance}%</span>
            </div>
          </div>
          <Progress value={wardBalance} className="h-3" />
          <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
            <Users className="h-3.5 w-3.5" />
            <span>{nurses.length} nurses on shift</span>
          </div>
        </Card>

        {/* Nurse Workload List */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-foreground">Nurse Workloads</h2>
            <button className="text-sm text-primary hover:text-primary/80 transition-colors">
              Rebalance
            </button>
          </div>

          {nurses.map((nurse) => (
            <Card 
              key={nurse.id} 
              className="p-4 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-soft)] transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{nurse.name}</h3>
                  <div className="flex items-center gap-2">
                    {getStatusBadge(nurse.status)}
                    <span className="text-xs text-muted-foreground">
                      {nurse.patients} patients
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{nurse.workload}%</div>
                  <div className="text-xs text-muted-foreground">workload</div>
                </div>
              </div>
              
              <div className="space-y-2">
                <Progress 
                  value={nurse.workload} 
                  className="h-2"
                  indicatorClassName={getStatusColor(nurse.status)}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Capacity</span>
                  <span>{100 - nurse.workload}% available</span>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-3">
          <Card className="p-4 shadow-[var(--shadow-card)]">
            <div className="text-sm text-muted-foreground mb-1">Overloaded</div>
            <div className="text-2xl font-bold text-destructive">2</div>
          </Card>
          <Card className="p-4 shadow-[var(--shadow-card)]">
            <div className="text-sm text-muted-foreground mb-1">Balanced</div>
            <div className="text-2xl font-bold text-success">2</div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;
