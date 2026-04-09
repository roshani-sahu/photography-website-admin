// Stepper.jsx
export default function Stepper({ step, steps }) {
  return (
    <div className="flex items-center justify-between mb-4">
      {steps.map((s, i) => {
        const active = step === i + 1;
        const done = step > i + 1;

        return (
          <div key={i} className="flex-1 flex items-center">
            
            <div className={`
              w-10 h-10 rounded-full flex items-center justify-center
              ${active || done ? "bg-primary text-white" : "border border-white/30 text-white/40"}
            `}>
              {i + 1}
            </div>

            {i < steps.length - 1 && (
              <div className={`
                flex-1 h-[2px]
                ${done ? "bg-gray-300" : "bg-gray-800"}
              `}/>
            )}
          </div>
        );
      })}
    </div>
  );
}