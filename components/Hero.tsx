export default function Hero(){

return (

<section className="
relative min-h-screen
bg-[#050B0F]
overflow-hidden
">

{/* teal glow */}

<div className="
absolute
top-20
left-1/2
-translate-x-1/2
w-[500px]
h-[500px]
bg-teal-400/20
blur-[120px]
rounded-full
"/>


<div className="
relative
max-w-6xl
mx-auto
px-6
pt-32
text-center
">


<h1 className="
text-6xl
font-semibold
tracking-tight
text-white
">

Healthcare data
<br/>

<span className="
text-transparent
bg-clip-text
bg-gradient-to-r
from-teal-300
to-cyan-500
">

connected securely

</span>

</h1>


<p className="
mt-6
text-lg
text-slate-400
max-w-xl
mx-auto
">

A unified platform helping patients and providers
access, manage, and protect healthcare information.

</p>


<div className="mt-10 flex justify-center gap-4">

<button className="
rounded-xl
bg-teal-400
px-6 py-3
text-black
font-medium
">

Get Started

</button>


<button className="
rounded-xl
border
border-white/20
px-6 py-3
text-white
">

View Demo

</button>


</div>


</div>


</section>

)

}
