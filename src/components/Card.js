import { Link } from "react-router-dom"

const Card = ({ user }) => {
  return (
    <Link key={user.name} to={`/users/${user.slug}`}>
      <article className="w-64 h-64 text-center border-4 border-cyan-900 rounded-tr-[46px] rounded-bl-[40px] bg-cyan-800 shadow-box article-hover">
        {user.profile_picture === "" ? (
          <img
            src="https://st.depositphotos.com/1028979/3864/i/450/depositphotos_38643469-stock-photo-young-woman-holding-interrogation-symbol.jpg"
            alt="default"
            className=" rounded-tr-[40px] rounded-bl-[40px] w-64 h-48"
          />
        ) : (
          <img
            src={user.profile_picture}
            alt={user.name}
            className=" rounded-tr-[40px] rounded-bl-[40px] w-64 h-48 object-cover"
          />
        )}

        <div className="">
          <h2 className="first-letter:capitalize mt-2 font-semibold text-lg text-cyan-100 shadow-text">
            {user.name}
          </h2>
        </div>
      </article>
    </Link>
  )
}

export default Card
