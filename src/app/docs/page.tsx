import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Code, Terminal, Database, Server, ChevronRight, CheckCircle2, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Documentation & Setup | ArachnidForms",
  description: "Learn how to deploy your own version of ArachnidForms.",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-background text-foreground relative font-sans selection:bg-primary/30">
      
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-primary opacity-20 blur-[100px]"></div>
      </div>
      
      {/* Dynamic Header */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-surface/50 backdrop-blur-2xl border border-border/50 rounded-full px-6 h-14 flex items-center justify-between w-[90%] max-w-5xl 2xl:max-w-7xl shadow-2xl transition-all duration-300">
        <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group w-24">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-semibold hidden sm:block">Back</span>
        </Link>
        
        <div className="flex items-center gap-2 flex-1 justify-center">
          <FileText className="w-4 h-4 text-primary hidden sm:block" />
          <span className="text-lg font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Documentation
          </span>
        </div>
        
        <div className="w-24"></div> {/* Spacer for balance */}
      </header>

      <main className="flex-1 flex flex-col relative px-4 sm:px-6 z-10 pt-32 pb-20 w-full max-w-5xl 2xl:max-w-7xl mx-auto">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 w-full">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 text-transparent bg-clip-text bg-gradient-to-br from-foreground to-foreground/50">
              Server Setup & Docs
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Deploy your own autonomous form-building infrastructure. Complete with AI capabilities, payments, and self-destructing data pipelines.
            </p>
          </div>
          <a href="https://github.com/ch0udharyji/AnachnidForms" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 font-bold border border-primary/50">
              <Code className="w-4 h-4 mr-2" /> Source Code
            </Button>
          </a>
        </div>

        {/* Showcase Notice */}
        <section className="bg-surface/30 backdrop-blur-xl border border-destructive/30 rounded-3xl p-8 mb-16 shadow-2xl relative overflow-hidden group w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-destructive/10 to-transparent opacity-50"></div>
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-destructive/20 rounded-full blur-[80px] group-hover:bg-destructive/30 transition-all duration-700"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="bg-destructive/10 border border-destructive/20 p-4 rounded-2xl flex-shrink-0 shadow-inner">
              <Server className="w-8 h-8 text-destructive" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-3 text-foreground">Production Deployment Notice</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                This hosted version of ArachnidForms is strictly a <strong>showcase and testing environment</strong>. 
                The database is routinely cleared, and it is not intended for collecting sensitive real-world data. 
                To use ArachnidForms for your organization, follow the server setup guide below to host it on your own hardware or cloud provider.
              </p>
            </div>
          </div>
        </section>

        <div className="space-y-12 w-full">
          {/* Step 1 */}
          <section className="relative group bg-surface/20 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl">
            <div className="absolute -inset-y-4 -inset-x-4 bg-surface/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/5">
                <Terminal className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">1. Clone & Install</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6 pl-16">
              Ensure you have <strong>Node.js 18+</strong> and <strong>PostgreSQL</strong> running. Clone the repository and install the dependencies to begin your server setup.
            </p>
            <div className="ml-0 md:ml-16 bg-[#0d1117] border border-border/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border/20 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">bash</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
                <span className="text-green-400">git clone</span> https://github.com/ch0udharyji/AnachnidForms.git<br/>
                <span className="text-green-400">cd</span> AnachnidForms<br/>
                <span className="text-green-400">npm</span> install
              </div>
            </div>
          </section>

          {/* Step 2 */}
          <section className="relative group pt-6 bg-surface/20 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl mt-6">
            <div className="absolute -inset-y-4 -inset-x-4 bg-surface/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/5">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">2. Environment Configuration</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6 pl-16">
              Create a <code>.env</code> file in the root directory. This contains your global infrastructure secrets. User-specific keys (like Stripe and OpenAI) can be configured later via the dashboard UI.
            </p>
            <div className="ml-0 md:ml-16 bg-[#0d1117] border border-border/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border/20 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">.env</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-foreground overflow-x-auto">
                <pre><code className="text-purple-300">DATABASE_URL<span className="text-foreground">=</span><span className="text-yellow-300">"postgresql://user:password@localhost:5432/arachnidforms"</span>
{`
`}NEXTAUTH_URL<span className="text-foreground">=</span><span className="text-yellow-300">"http://localhost:3000"</span>
NEXTAUTH_SECRET<span className="text-foreground">=</span><span className="text-yellow-300">"generate-a-secure-secret-here"</span>
{`
# OAuth Providers
`}DISCORD_CLIENT_ID<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
DISCORD_CLIENT_SECRET<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
{`
# Rate Limiting (Upstash Redis)
`}UPSTASH_REDIS_REST_URL<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
UPSTASH_REDIS_REST_TOKEN<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
{`
# Global Infrastructure (Optional - users can provide their own)
`}EMAIL_SERVER_HOST<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
S3_BUCKET_NAME<span className="text-foreground">=</span><span className="text-yellow-300">""</span>
NEXT_PUBLIC_RECAPTCHA_SITE_KEY<span className="text-foreground">=</span><span className="text-yellow-300">""</span></code></pre>
              </div>
            </div>
          </section>

          {/* Step 3 */}
          <section className="relative group pt-6 bg-surface/20 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl mt-6">
            <div className="absolute -inset-y-4 -inset-x-4 bg-surface/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/5">
                <Database className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">3. Initialize the Database</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6 pl-16">
              ArachnidForms uses Prisma ORM. Generate the client and push the schema directly to your Postgres instance to provision the tables.
            </p>
            <div className="ml-0 md:ml-16 bg-[#0d1117] border border-border/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border/20 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">bash</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
                <span className="text-green-400">npx</span> prisma generate<br/>
                <span className="text-green-400">npx</span> prisma db push
              </div>
            </div>
          </section>

          {/* Step 4 */}
          <section className="relative group pt-6 bg-surface/20 backdrop-blur-md border border-border/50 rounded-3xl p-8 shadow-xl mt-6">
            <div className="absolute -inset-y-4 -inset-x-4 bg-surface/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 text-primary shadow-lg shadow-primary/5">
                <Server className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight">4. Launch the Server</h2>
            </div>
            <p className="text-muted-foreground text-lg mb-6 pl-16">
              Boot up the Turbopack development server. Your private instance will be available locally.
            </p>
            <div className="ml-0 md:ml-16 bg-[#0d1117] border border-border/30 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center px-4 py-3 border-b border-border/20 bg-[#161b22]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                  <div className="w-3 h-3 rounded-full bg-border/50"></div>
                </div>
                <span className="ml-4 text-xs font-mono text-muted-foreground">bash</span>
              </div>
              <div className="p-6 font-mono text-sm leading-relaxed text-blue-300 overflow-x-auto">
                <span className="text-green-400">npm</span> run dev
              </div>
            </div>
            <div className="ml-0 md:ml-16 mt-6 flex items-center gap-3 text-muted-foreground bg-primary/5 border border-primary/10 rounded-lg p-4 inline-flex">
              <CheckCircle2 className="w-5 h-5 text-primary" />
              <span>Server running at <strong>http://localhost:3000</strong></span>
            </div>
          </section>

          {/* Deployment Card */}
          <section className="pt-16 pb-8">
            <div className="bg-gradient-to-br from-surface/80 to-background border border-border/50 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-black mb-6">Deploying to Vercel</h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  For enterprise-grade production deployments, we recommend Vercel. Connect your GitHub repository, add your environment variables in the project settings, and Vercel will automatically build and deploy the Next.js application at the edge.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="https://vercel.com/new" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" className="rounded-full w-full sm:w-auto h-12 px-8 font-bold text-base shadow-xl">
                      Deploy on Vercel <ChevronRight className="w-5 h-5 ml-2" />
                    </Button>
                  </a>
                  <a href="https://nextjs.org/docs/deployment" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="rounded-full w-full sm:w-auto h-12 px-8 font-bold text-base bg-background/50 backdrop-blur-sm">
                      Read Deployment Docs
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-surface/30 py-6 z-10 relative flex-shrink-0 mt-auto">
        <div className="container mx-auto px-6 max-w-5xl 2xl:max-w-7xl w-full">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
             <div className="flex items-center gap-2">
               <Link href="/" className="flex items-center gap-2">
                 <div className="w-6 h-6 flex items-center justify-center">
                    <Image src="/logo.png" alt="ArachnidForms Logo" width={24} height={24} className="object-contain" />
                 </div>
                 <span className="text-lg font-bold tracking-tighter">ArachnidForms</span>
               </Link>
             </div>
             
             <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted-foreground">
               <Link href="/contributions" className="hover:text-foreground transition-colors">Contributions</Link>
               <Link href="/tos" className="hover:text-foreground transition-colors">Terms of Service</Link>
               <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
               <Link href="/login" className="hover:text-foreground transition-colors">Login</Link>
               <Link href="/register" className="hover:text-foreground transition-colors">Sign Up</Link>
               <a href="https://github.com/ch0udharyji" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a>
             </div>
          </div>
          
          <div className="text-center text-xs text-muted-foreground/50 flex flex-col items-center gap-1">
            <p>All right reserves to Shubham Choudhary AKA ch0udharyji on github 2026</p>
            <p>Built with Next.js 14, React Flow, and Shadcn UI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
