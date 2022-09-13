package th.co.robinhood.mart.repository


interface MartRepositoryContractor {
    
    fun getMartFav(request: MartFavRequest): Single<MartFav>
}