export default function PageTitle({ title, description }: { title: string, description: string }) {
  return (
    <div style={{ backgroundImage: `url('/assets/site/banner2.jpg')`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
      <div className="py-22 flex flex-col items-center justify-center space-y-2">
        <h1 className="text-5xl capitalize">{title}</h1>
        <span className="text-muted-foreground">{description}</span>
      </div>
    </div>
  )
}
