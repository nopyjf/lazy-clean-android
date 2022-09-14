package th.co.robinhood.promotion.repository


interface PromotionRepositoryContractor {
    
    fun getPromotionJaa(request: PromotionJaaRequest): Single<PromotionJaa>
}