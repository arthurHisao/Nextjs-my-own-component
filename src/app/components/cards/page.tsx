import Button from "@/components/Button";

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1.5 text-2xl'>Card example:</h2>

            <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <div className="min-h-60 dark:shadow-white/20 shadow-sm p-4 w-full md:w-1/3 relative">
                    <div className="text-lg font-bold">Card Title - Style 1</div>
                    
                    <div className="relative min-h-60 max-h-60 overflow-auto">
                        <p className="my-3 absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>
                    
                    <div className="float-end mt-3">
                        <Button className="font-medium" label="Confirm"/>
                    </div>
                </div>
                                
                <div className="min-h-60 dark:shadow-[0px_0px_3px_1px_rgba(255,255,255,0.1),5px_5px_15px_8px_rgba(0,0,0,0.3)] shadow-[5px_5px_15px_4px_rgba(0,0,0,0.09)] p-4 w-full md:w-1/3 relative">
                    <div className="text-lg font-bold">Card Title - Style 2</div>

                    <div className="relative min-h-60 max-h-60 overflow-auto">
                        <p className="my-3 absolute">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    </div>

                    <div className="float-end mt-3">
                        <Button className="font-medium" label="Confirm"/>
                    </div>
                </div>                
            </div>
        </div>
    )
}