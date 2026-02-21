const accounts = [
  { id: 1, name: "Main account", balance: 12450.0, currency: "EUR" },
  { id: 2, name: "Savings", balance: 8200.0, currency: "EUR" },
];

const recent = [
  { id: 1, label: "Supermarket", amount: -87.32, date: "Today" },
  { id: 2, label: "Salary", amount: 3200.0, date: "1 Feb" },
  { id: 3, label: "Rent", amount: -1200.0, date: "1 Feb" },
  { id: 4, label: "Subscription", amount: -12.99, date: "3 Feb" },
];

const budgets = [
  { category: "Groceries", spent: 320, limit: 400 },
  { category: "Leisure", spent: 85, limit: 200 },
];

export default function FinancialPage() {
  const totalBalance = accounts.reduce((s, a) => s + a.balance, 0);

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="stat-card p-4 md:p-5">
          <div className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Total balance
          </div>
          <div className="mt-1 text-2xl font-bold text-foreground">
            €{totalBalance.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}
          </div>
          <div className="mt-1 text-xs text-zenita-primary">Across 2 accounts</div>
        </div>
        {accounts.map((a) => (
          <div key={a.id} className="card p-4 md:p-5">
            <p className="text-xs font-medium text-muted-foreground">{a.name}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              €{a.balance.toLocaleString("nl-NL", { minimumFractionDigits: 2 })}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-4 md:p-5">
          <h2 className="text-base font-semibold text-foreground">Recent transactions</h2>
          <ul className="mt-3 space-y-1.5">
            {recent.map((t) => (
              <li
                key={t.id}
                className="flex items-center justify-between rounded-crm bg-muted px-3 py-2.5"
              >
                <div>
                  <p className="text-sm font-medium text-foreground">{t.label}</p>
                  <p className="text-xs text-muted-foreground">{t.date}</p>
                </div>
                <span
                  className={
                    t.amount >= 0 ? "text-sm font-medium text-zenita-primary" : "text-sm font-medium text-foreground"
                  }
                >
                  {t.amount >= 0 ? "+" : ""}€{Math.abs(t.amount).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="card p-4 md:p-5">
          <h2 className="text-base font-semibold text-foreground">Budgets</h2>
          <ul className="mt-3 space-y-3">
            {budgets.map((b) => (
              <li key={b.category} className="rounded-crm bg-muted p-3">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{b.category}</span>
                  <span className="text-muted-foreground">
                    €{b.spent} / €{b.limit}
                  </span>
                </div>
                <div className="mt-2 h-1.5 w-full rounded-full bg-muted">
                  <div
                    className="h-1.5 rounded-full bg-zenita-primary"
                    style={{ width: `${Math.min(100, (b.spent / b.limit) * 100)}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
