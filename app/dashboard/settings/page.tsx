const settingsSections = [
  {
    title: "Profile",
    items: [
      { label: "Name", value: "Demo User" },
      { label: "Email", value: "demo@zenita.app" },
    ],
  },
  {
    title: "Notifications",
    items: [
      { label: "Email reminders", value: "On" },
      { label: "Health alerts", value: "On" },
      { label: "Document expiry", value: "On" },
    ],
  },
  {
    title: "Preferences",
    items: [
      { label: "Language", value: "English" },
      { label: "Timezone", value: "Europe/Amsterdam" },
      { label: "Theme", value: "Light" },
    ],
  },
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      {settingsSections.map((section) => (
        <div key={section.title} className="card p-4 md:p-5">
          <h2 className="text-base font-semibold text-gray-900">{section.title}</h2>
          <ul className="mt-3 space-y-1.5">
            {section.items.map((item) => (
              <li
                key={item.label}
                className="flex items-center justify-between rounded-crm bg-slate-50 px-3 py-2.5"
              >
                <span className="text-sm text-slate-600">{item.label}</span>
                <span className="text-sm font-medium text-gray-900">{item.value}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
