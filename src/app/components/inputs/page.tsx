import Input from '@/components/Input'

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1.5 text-2xl'>Inputs example:</h2>

            <div className='grid grid-rows-[auto] flex-wrap items-center dark:bg-[#19222e] rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e]'>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b'>The Input component has 4 different sizes: sm, md, lg, xl.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input size="sm" placeholder="Type Something" />
                    <Input size="md" placeholder="Type Something" />
                    <Input size="lg" placeholder="Type Something" />
                    <Input size="xl" placeholder="Type Something" />
                </div>                              
            </div>

            <div className='grid grid-rows-[auto] flex-wrap items-center dark:bg-[#19222e] rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e] mt-4'>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b'>The Input component has different types.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input size="md" placeholder="Type Something..."/>
                    <Input size="md" placeholder="Type Password" type="password"/>
                    <Input size="md" placeholder="Type your email" type="email"/>
                    <Input size="md" placeholder="Select file" type="file"/>
                    <Input size="md" placeholder="Text Area" type="textarea"/>
                </div>                              
            </div>

            <div className='grid grid-rows-[auto] flex-wrap items-center dark:bg-[#19222e] rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e] mt-4'>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b'>The Input Outlined has different types.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input placeholder="text" variant='outlined'/>
                    <Input type="password" placeholder="password" variant='outlined'/>
                    <Input type="email" placeholder="email" variant='outlined'/>
                    <Input type="textarea" placeholder="textarea" variant='outlined'/>
                </div>   

                {/* MD */}
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input size="md" placeholder="text" variant='outlined'/>
                    <Input size="md" type="password" placeholder="password" variant='outlined'/>
                    <Input size="md" type="email" placeholder="email" variant='outlined'/>
                    <Input size="md" type="textarea" placeholder="textarea" variant='outlined'/>
                </div>                
                
                {/* LG */}
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input size="lg" placeholder="text" variant='outlined'/>
                    <Input size="lg" type="password" placeholder="password" variant='outlined'/>
                    <Input size="lg" type="email" placeholder="email" variant='outlined'/>
                    <Input size="lg" type="textarea" placeholder="textarea" variant='outlined'/>
                </div>               
                
                {/* XL */}
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Input size="xl" placeholder="text" variant='outlined'/>
                    <Input size="xl" type="password" placeholder="password" variant='outlined'/>
                    <Input size="xl" type="email" placeholder="email" variant='outlined'/>
                    <Input size="xl" type="textarea" placeholder="textarea" variant='outlined'/>
                </div>
            </div>
        </div>
    )
}