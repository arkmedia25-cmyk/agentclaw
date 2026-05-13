export default function CategoriesLoading() {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-primary-light">
        <div className="container-max section-padding text-white">
          <div className="h-8 w-64 bg-white/20 rounded animate-pulse mb-4" />
          <div className="h-5 w-96 bg-white/20 rounded animate-pulse" />
        </div>
      </div>
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="rounded-lg p-8 h-48 animate-pulse bg-border" />
          ))}
        </div>
      </div>
    </>
  )
}
