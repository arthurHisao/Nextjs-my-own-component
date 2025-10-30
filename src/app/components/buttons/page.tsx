import Button from '@/components/Button'

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1.5 text-2xl'>Buttons example:</h2>

            <div className='grid grid-rows-[auto] flex-wrap items-center rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e]'>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b dark:bg-[#19222e]'>The button component has different size and color variations.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="Primary" color="primary" size='xs'/>
                    <Button label="Primary" color="primary" size='sm'/>
                    <Button label="Primary" color="primary" size='md' />
                    <Button label="Primary" color="primary" size='lg' />
                    <Button label="Primary" color="primary" size='xl' />
                </div>                              
                
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="positive" color="positive" size='xs'/>
                    <Button label="positive" color="positive" size='sm'/>
                    <Button label="positive" color="positive" size='md' />
                    <Button label="positive" color="positive" size='lg' />
                    <Button label="positive" color="positive" size='xl' />
                </div>            

                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="negative" color="negative" size='xs'/>
                    <Button label="negative" color="negative" size='sm'/>
                    <Button label="negative" color="negative" size='md' />
                    <Button label="negative" color="negative" size='lg' />
                    <Button label="negative" color="negative" size='xl' />
                </div>    
                
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="warning" color="warning" size='xs'/>
                    <Button label="warning" color="warning" size='sm'/>
                    <Button label="warning" color="warning" size='md' />
                    <Button label="warning" color="warning" size='lg' />
                    <Button label="warning" color="warning" size='xl' />
                </div>    
                
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="Default" size='xs'/>
                    <Button label="Default" size='sm'/>
                    <Button label="Default" size='md' />
                    <Button label="Default" size='lg' />
                    <Button label="Default" size='xl' />
                </div>                  
            </div>

            <div className='grid grid-rows-[auto] flex-wrap items-center rounded-t-xs border dark:border-[#19222e] dark:shadow-lg/35 shadow-[#19222e] mt-4 '>
                <div className='col-span-full px-4 h-full py-1.5 rounded-t-xs border-b dark:bg-[#19222e]'>Button with Icons and loading state</div>

                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="With Icons" icon="Dog" size='sm'/>
                    <Button label="With Icons" icon="CircleSmall" iconRight size='sm'/>
                    <Button label="Processing..." loading size='md'/>
                </div>          
            </div>
        </div>
    )
}