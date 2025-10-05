import Button from '@/components/Button'

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1.5 text-2xl'>Buttons example:</h2>

            <div className='grid grid-flow-col grid-cols-2 grid-rows-[auto_auto] flex-wrap border rounded-t-sm  items-center'>
                <div className='col-span-full px-4 h-full py-1.5 border-b'>The button component has different size and color variations.</div>
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="Primary" color="primary" size='xs'/>
                    <Button label="Primary" color="primary" size='sm'/>
                    <Button label="Primary" color="primary" size='md' />
                    <Button label="Primary" color="primary" size='lg' />
                    <Button label="Primary" color="primary" size='xl' />
                </div>                              
                
                <div className='px-4 py-3 flex gap-2 items-center flex-wrap'>
                    <Button label="Default" size='xs'/>
                    <Button label="Default" size='sm'/>
                    <Button label="Default" size='md' />
                    <Button label="Default" size='lg' />
                    <Button label="Default" size='xl' />
                </div>                
            </div>
        </div>
    )
}