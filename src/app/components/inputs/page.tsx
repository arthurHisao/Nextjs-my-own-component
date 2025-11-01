import Input from '@/components/Input'

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1.5 text-2xl'>Inputs example:</h2>

            <div className='grid grid-rows-[auto] flex-wrap items-center dark:bg-[#19222e] rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e]'>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b'>The Input component has different variations.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input placeholder="Type Something..."/>
                    <Input placeholder="Type Password" type="password"/>
                    <Input placeholder="Type Number" type="number"/>
                </div>                              
            </div>
        </div>
    )
}