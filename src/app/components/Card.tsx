interface CardProps {
    title: string
    content: string
}

export default function Card({title, content}: CardProps) {
    return(
        <div className="py-56 px-20 bg-nude rounded-xl text-center">
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-gray-600 mt-2">{content}</p>
        </div>
    )
}