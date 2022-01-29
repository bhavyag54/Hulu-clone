function HeaderItem({Icon, title}) {
    return (
        <div className="flex flex-col items-center group cursor-pointer w-12 overflow-visible sm:w-20 hover:text-white">
            <Icon className="h-7 mb-1 mr-0.5 hover:animate-bounce"
            />
            <p className="bottom-0 uppercase opacity-0 group-hover:opacity-100 tracking-widest">{title}</p>
        </div>
    )
}

export default HeaderItem
