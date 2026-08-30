import AuthForm from "./components/AuthForm";

export default function Home() {
  return (
    <div
      className="
        relative
        flex
        min-h-full
        justify-center
        items-center
        py-36
        sm:px-6
        lg:px-8
        bg-slate-900
        overflow-hidden
      "
    >
      {/* 1. Les orbes de lumière floutés en arrière-plan */}
      <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-sky-500 rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500 rounded-full filter blur-[120px] opacity-25"></div>

      {/* 2. Le conteneur principal avec l'effet de verre dépoli */}
      <div
        className="
          relative
          z-10
          h-125
          w-200
          rounded-2xl
          bg-white/10         {/* Blanc semi-transparent à 10% d'opacité */}
          backdrop-blur-md    {/* C'est la classe magique qui floute l'arrière-plan */}
          border
          border-white/20     {/* Une bordure fine translucide pour l'effet cristallin */}
          shadow-2xl          {/* Une ombre forte pour donner de la profondeur */}
        "
      >
        <AuthForm />
      </div>
    </div>
  )
}
