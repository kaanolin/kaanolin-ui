import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Header } from "../layout/Header";
import { SideNav } from "../layout/SideNav";
import { QuickNav } from "../layout/QuickNav";

function Shell() {
  return (
    <div className="min-h-screen bg-bg-secondary">
      <Header />

      <div className="pt-14 flex w-full">
        <SideNav />

        <main className="flex-1 min-w-0">
          <div className="max-w-[858px] mx-auto px-5 xs:px-6 sm:px-8 md:px-12 py-10">
            <Outlet />
          </div>
        </main>

        <QuickNav />
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  component: Shell,
});
