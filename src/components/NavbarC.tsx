import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";

const NavbarC = () => {
  const user = undefined;
  const isAdmin = true;
  return (
    <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between border-b botder-zinc-200">
          <Link href="/" className="flex z-40 font-semibold">
            hola <span className="text-green-600">Hola</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <Link
                  href="/"
                  className={buttonVariants({ variant: "ghost", size: "sm" })}
                >
                  Cerrar Sesion
                </Link>
                {isAdmin ? (
                  <Link
                    href="/"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    LINK admin
                  </Link>
                ) : null}
              </>
            ) : (
              <>
                <>
                  <Link
                    href="/"
                    className={buttonVariants({ variant: "ghost", size: "sm" })}
                  >
                    Iniciar Sesion
                  </Link>
                  <Link
                    href="/"
                    className={buttonVariants({ size: "sm", className: "hidden sm:flex items-center gap-1"})}
                  >
                    otra cosa ayer
                    <ArrowRight className="ml-1.5 h-5 w-5"/>
                  </Link>
                </>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default NavbarC;
