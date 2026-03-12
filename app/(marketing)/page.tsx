import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default function LandingPage() {
  const { userId } = auth();

  if (userId) {
    return redirect("/setup");
  }

  return (
    <div className="bg-brand-light dark:bg-brand-dark text-slate-900 dark:text-slate-100 selection:bg-brand selection:text-white overflow-x-hidden transition-colors duration-300">
      <div className="relative min-h-screen flex flex-col hero-gradient">
        {/* Background Orbs */}
        <div className="blob top-[-10%] right-[-5%]"></div>
        <div className="blob bottom-[10%] left-[-10%] bg-purple-600"></div>

        {/* Navigation Bar */}
        <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-brand-dark/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <div className="bg-brand p-2 rounded-lg">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">Teamcord</span>
            </div>

            {/* Navigation Links */}
            <nav className="hidden md:flex items-center gap-10">
              <Link href="#ui-mockup" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                App Preview
              </Link>
              <Link href="#features" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Features
              </Link>
              <Link href="#support" className="text-sm font-semibold text-slate-300 hover:text-white transition-colors">
                Support
              </Link>
            </nav>

            {/* Auth */}
            <div className="flex items-center gap-4">
              <Link href="/sign-in">
                <button className="px-5 py-2.5 rounded-full text-sm font-bold bg-white text-brand-dark hover:bg-slate-200 transition-all">
                  Login
                </button>
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-20 relative">
          <div className="max-w-5xl w-full text-center space-y-8 mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold uppercase tracking-wider">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Now in Open Beta
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1]">
              Where Teams <span className="text-brand">Connect</span> and Build
            </h1>

            <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 font-medium leading-relaxed">
              Experience a powerful community platform designed for seamless collaboration. Organized channels, crystal-clear voice, and integrated tools for modern teams.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              
              <Link href="/setup" className="w-full sm:w-auto">
                <button className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all border border-slate-700">
                  Login to Teamcord
                </button>
              </Link>
            </div>
          </div>

          {/* UI Mockup */}
          <div id="ui-mockup" className="relative w-full max-w-6xl mx-auto mt-12 px-4 group">
            {/* Glowing effect behind mockup */}
            <div className="absolute inset-0 bg-brand/20 blur-[100px] -z-10 rounded-full scale-90 opacity-50 group-hover:opacity-100 transition-opacity"></div>

            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row h-[600px] w-full">
              {/* Sidebar: Server List */}
              <div className="w-20 bg-brand-dark/50 flex flex-col items-center py-4 gap-4 border-r border-white/5">
                <div className="w-12 h-12 bg-brand rounded-xl flex items-center justify-center text-white text-xl cursor-pointer hover:rounded-2xl transition-all">
                  <span>👥</span>
                </div>
                <div className="w-10 h-[2px] bg-white/10 rounded-full"></div>
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 text-xl cursor-pointer hover:bg-brand hover:text-white transition-all">
                  <span>🚀</span>
                </div>
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-slate-300 text-xl cursor-pointer hover:bg-brand hover:text-white transition-all">
                  <span>{`</>`}</span>
                </div>
                <div className="mt-auto w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-emerald-500 text-2xl cursor-pointer hover:bg-emerald-500 hover:text-white transition-all">
                  <span>＋</span>
                </div>
              </div>

              {/* Sidebar: Channels */}
              <div className="w-60 bg-brand-dark/30 hidden md:flex flex-col py-4 px-3 gap-6 border-r border-white/5">
                <div>
                  <div className="flex items-center justify-between text-slate-400 mb-2 px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest">Text Channels</span>
                    <span className="text-lg cursor-pointer select-none">＋</span>
                  </div>
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2 bg-white/5 text-white px-3 py-1.5 rounded-lg cursor-pointer">
                      <span className="text-slate-500 text-xl">#</span>
                      <span className="text-sm font-semibold">general</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                      <span className="text-slate-500 text-xl">#</span>
                      <span className="text-sm font-semibold">development</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-400 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                      <span className="text-slate-500 text-xl">#</span>
                      <span className="text-sm font-semibold">announcements</span>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between text-slate-400 mb-2 px-2">
                    <span className="text-[10px] font-black uppercase tracking-widest">Voice Channels</span>
                    <span className="text-lg cursor-pointer select-none">＋</span>
                  </div>
                  <div className="space-y-0.5">
                    {/* Voice channel */}
                    <div className="flex items-center gap-2 text-slate-400 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                      <span className="text-lg">🔊</span>
                      <span className="text-sm font-semibold">Huddle Lounge</span>
                    </div>
                    <div className="pl-8 flex items-center gap-2 py-1">
                      <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-emerald-500"></div>
                      <span className="text-xs text-slate-300">Alex</span>
                    </div>

                    {/* Video channels header on its own line */}
                    <div className="mt-3 flex items-center justify-between px-2 text-slate-400">
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Video Channels
                      </span>
                      <span className="text-lg cursor-pointer select-none">＋</span>
                    </div>

                    {/* Video channel */}
                    <div className="flex items-center gap-2 text-slate-400 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-white/5 transition-colors">
                      <span className="text-lg">📹</span>
                      <span className="text-sm font-semibold">Meeting Room</span>
                    </div>
                    <div className="pl-8 space-y-1 py-1">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-emerald-500"></div>
                        <span className="text-xs text-slate-300">Alex</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-emerald-500"></div>
                        <span className="text-xs text-slate-300">Sarah</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto bg-black/20 p-2 rounded-xl flex items-center gap-3">
                  <div className="relative">
                    <div className="w-8 h-8 rounded-full bg-brand/40 flex items-center justify-center text-white text-sm">
                      <span>👤</span>
                    </div>
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                  </div>
                  <div className="flex-grow min-w-0">
                    <p className="text-xs font-bold truncate">TeamLead_Dev</p>
                    <p className="text-[10px] text-slate-400 truncate">#1337</p>
                  </div>
                  <div className="flex gap-1 text-slate-400">
                    <span className="cursor-pointer text-lg hover:text-white">🎙</span>
                    <span className="cursor-pointer text-lg hover:text-white">⚙</span>
                  </div>
                </div>
              </div>

              {/* Main Chat Area */}
              <div className="flex-grow flex flex-col bg-transparent">
                <div className="h-14 px-6 border-b border-white/5 flex items-center gap-3">
                  <span className="text-slate-500 text-2xl">#</span>
                  <span className="font-bold text-white">general</span>
                  <div className="w-px h-6 bg-white/10 mx-2"></div>
                  <span className="text-sm text-slate-400">The heart of our community!</span>
                  <div className="ml-auto flex items-center gap-4 text-slate-400">
                    <span className="cursor-pointer hover:text-white">🔔</span>
                    <span className="cursor-pointer hover:text-white">📌</span>
                    <span className="cursor-pointer hover:text-white">👥</span>
                    <div className="relative">
                      <input className="bg-black/20 border-none rounded px-3 py-1 text-xs w-32 focus:ring-1 focus:ring-brand transition-all" placeholder="Search" type="text" />
                    </div>
                  </div>
                </div>

                <div className="flex-grow p-6 space-y-6 overflow-y-auto">
                  {/* Message */}
                  <div className="flex gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-indigo-500 flex-shrink-0">
                      <Image
                        src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=80"
                        alt="Sarah avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-white hover:underline cursor-pointer">Sarah</span>
                        <span className="text-[10px] text-slate-500">Today at 10:42 AM</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">Hey team! Just pushed the new build for the dashboard. Would love some feedback on the new animations. 🚀</p>
                    </div>
                  </div>

                  {/* System Msg */}
                  <div className="flex items-center gap-4 text-slate-500 text-xs">
                    <div className="flex-grow h-px bg-white/5"></div>
                    <span>August 24, 2024</span>
                    <div className="flex-grow h-px bg-white/5"></div>
                  </div>

                  {/* Message */}
                  <div className="flex gap-4 group">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-amber-500 flex-shrink-0">
                      <Image
                        src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80"
                        alt="Mike avatar"
                        width={40}
                        height={40}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-amber-400 hover:underline cursor-pointer">Mike</span>
                        <span className="text-[10px] text-slate-500">Today at 11:05 AM</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">Looking clean! Can we also check the mobile responsiveness on the settings page? <span className="text-brand hover:underline cursor-pointer">@DesignTeam</span></p>
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <div className="bg-white/5 rounded-xl px-4 py-3 flex items-center gap-4 focus-within:ring-1 focus-within:ring-brand transition-all">
                    <button className="text-slate-400 hover:text-white text-lg">
                      <span>➕</span>
                    </button>
                    <input className="bg-transparent border-none focus:ring-0 text-sm text-slate-200 w-full placeholder:text-slate-500" placeholder="Message #general" type="text" />
                    <div className="flex items-center gap-3 text-slate-400 text-lg">
                      <span className="cursor-pointer hover:text-white">🎁</span>
                      <span className="cursor-pointer hover:text-white">GIF</span>
                      <span className="cursor-pointer hover:text-white">📝</span>
                      <span className="cursor-pointer hover:text-white">😊</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar: Members */}
              <div className="w-60 bg-brand-dark/30 hidden lg:flex flex-col py-4 px-4 gap-6">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-4 block">Online — 4</span>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-emerald-400">
                          <Image
                            src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=80"
                            alt="Alex avatar"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white">Alex</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-indigo-400">
                          <Image
                            src="https://images.pexels.com/photos/3760853/pexels-photo-3760853.jpeg?auto=compress&cs=tinysrgb&w=80"
                            alt="Sarah avatar"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-slate-300 group-hover:text-white">Sarah</span>
                    </div>
                    <div className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative opacity-50">
                        <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-500">
                          <Image
                            src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=80"
                            alt="Offline user avatar"
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-slate-400 border-2 border-slate-900 rounded-full"></div>
                      </div>
                      <span className="text-sm font-medium text-slate-500 group-hover:text-slate-300">Offline_User</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Features Section */}
        <section id="features" className="py-24 px-6 max-w-7xl mx-auto w-full">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Organized Channels */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/50 transition-colors group">
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-md shadow-black/30 group-hover:scale-105 transition-transform">
                <Image
                  src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=160"
                  alt="Team collaborating in channels"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Organized Channels</h3>
              <p className="text-slate-400 leading-relaxed">
                Topic-based channels give you an organized space to talk about everything your team needs.
              </p>
            </div>

            {/* Voice & Video */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/50 transition-colors group">
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-md shadow-black/30 group-hover:scale-105 transition-transform">
                <Image
                  src="https://images.pexels.com/photos/3205567/pexels-photo-3205567.jpeg?auto=compress&cs=tinysrgb&w=160"
                  alt="People in a video call"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Voice & Video</h3>
              <p className="text-slate-400 leading-relaxed">
                Low-latency voice and video feels like you’re in the same room. No more link sharing or waiting.
              </p>
            </div>

            {/* Member Management */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:border-brand/50 transition-colors group">
              <div className="w-16 h-16 mb-6 rounded-2xl overflow-hidden border border-white/10 shadow-md shadow-black/30 group-hover:scale-105 transition-transform">
                <Image
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=160"
                  alt="Admin managing team members"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Member Management</h3>
              <p className="text-slate-400 leading-relaxed">
                Robust permissions and custom roles to manage communities of any size with total precision.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="download" className="py-32 bg-brand/5 border-y border-white/5 text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">Ready to start building?</h2>
            <p className="text-xl text-slate-400">Join over 10,000 teams already using Teamcord to power their workflows.</p>
            <div className="pt-4 flex justify-center">
              <Link href="/setup">
                <button className="px-10 py-5 bg-brand hover:bg-brand/90 text-white font-bold rounded-xl transition-all shadow-xl shadow-brand/20 text-lg">
                  Get Started for Free
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="support" className="py-20 px-6 max-w-7xl mx-auto w-full">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="bg-brand/20 p-2 rounded-lg">
                <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="text-xl font-black tracking-tight text-white">Teamcord</span>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm font-semibold text-slate-400">
              <Link href="#" className="hover:text-white">Privacy Policy</Link>
              <Link href="#" className="hover:text-white">Terms of Service</Link>
              <Link href="#" className="hover:text-white">Cookie Settings</Link>
              <Link href="#" className="hover:text-white">Careers</Link>
            </div>

            <div className="flex items-center gap-6 text-slate-400">
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256"><path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 256 256"><path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path></svg>
              </Link>
            </div>
          </div>
          <div className="mt-12 text-center text-slate-500 text-sm">
            © 2024 Teamcord Inc. All rights reserved. Built for teams that move fast.
          </div>
        </footer>
      </div>
    </div>
  );
}
