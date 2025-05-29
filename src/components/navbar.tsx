import { LogInIcon, MoonIcon, SunIcon } from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/theme-provider";

export function Navbar() {
  return (
    <div className="p-2 border-b-1">
      <div className="flex justify-between items-center max-w-screen-lg mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink className="font-bold" href="/">
                Makishima
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <GettingStartedContent />
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <UserInteractionMenu />
      </div>
    </div>
  );
}

function GettingStartedContent() {
  return (
    <ul className="grid gap-2 grid-cols-[0.75fr_1fr] w-128">
      <li className="row-span-2 rounded-md">
        <SimpleNavLink
          className="h-full justify-end"
          title="Invite Makishima"
          href="/invite"
        >
          Bring some chaos to your Discord server. Invite Makishima!
        </SimpleNavLink>
      </li>
      <li>
        <SimpleNavLink title="Features" href="/features">
          Check out the awesome features that Makishima brings to the table.
        </SimpleNavLink>
      </li>
      <li>
        <SimpleNavLink title="Latest Updates" href="/updates">
          Stay updated with the latest changes and improvements.
        </SimpleNavLink>
      </li>
    </ul>
  );
}

function SimpleNavLink({
  title,
  href,
  className,
  children,
}: {
  title: string;
  href?: string;
  className?: string;
  children: string;
}) {
  return (
    <NavigationMenuLink className={className} href={href}>
      <b className="font-semibold">{title}</b>
      <p className="text-muted-foreground">{children}</p>
    </NavigationMenuLink>
  );
}

function UserInteractionMenu() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="space-x-2">
      <Button
        className="cursor-pointer"
        variant="outline"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </Button>
      <Button asChild>
        <a href="/api/oauth/authorization/discord">
          <LogInIcon />
          Log In with Discord
        </a>
      </Button>
    </div>
  );
}
