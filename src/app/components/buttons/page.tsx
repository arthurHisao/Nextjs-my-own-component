import Button from '@/components/Button'

export default function Page() {
    return (
        <div className="w-full px-4 flex flex-col h-[calc(100vh-112px)] overflow-auto">
            <h2 className='mt-4 mb-1'>Buttons example</h2>
            <div className='grid grid-rows-[2.5rem_100px] h-auto border rounded-t-sm divide-y items-center'>
                <div className='px-4 py-1'>The button component has different size and color variations.</div>
                <div className='px-4 py-3 flex gap-2 items-center'>
                    <Button size='xs'/>
                    <Button size='sm'/>
                    <Button size='md' />
                    <Button size='lg' />
                    <Button size='xl' />
                </div>                
            </div>
        </div>
    )
}