import Button from "../Button";

export function Card({ children }) {
    return (
        <div className="min-h-60 dark:shadow-white/20 shadow-sm p-4 w-full md:w-1/3 relative">
            {children}
        </div>
    )
}

export function CardHeader() {
    return (
        <div className="text-lg font-bold">Card Title - Style 1</div>
    )
}


export function CardContent() {
    return (
        <div className="relative min-h-60 max-h-60 overflow-auto">
            <p className="my-3 absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    )
}

export function CardFooter() {
    return (
        <div className="float-end mt-3">
            <Button className="font-medium" label="Confirm"/>
        </div>
    )
}