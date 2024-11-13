import { TooltipTrigger } from "@radix-ui/react-tooltip";
import { Dock, DockIcon } from "./ui/dock";
import { Tooltip, TooltipContent, TooltipProvider } from "./ui/tooltip";
import { Gamepad2, HandHelping, Home } from "lucide-react";

export default function Navbar({className}: { className?: string}) {
    return (
        <div
        className={className}>
            <TooltipProvider>
            <Dock direction="middle">
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                                <a href="/"><Home className="size-7"/></a>
                        </TooltipTrigger>
                        <TooltipContent>Home</TooltipContent>
                    </Tooltip>
                </DockIcon>
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                                <a href="/games"><Gamepad2 className="size-7"/></a>
                        </TooltipTrigger>
                        <TooltipContent>Find Games</TooltipContent>
                    </Tooltip>
                </DockIcon>
                <DockIcon>
                    <Tooltip>
                        <TooltipTrigger asChild>
                                <a href="/contact"><HandHelping className="size-7"/></a>
                        </TooltipTrigger>
                        <TooltipContent>Support Us</TooltipContent>
                    </Tooltip>
                </DockIcon>
            </Dock>
        </TooltipProvider>
        </div>
    )
}
