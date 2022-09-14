package th.co.robinhood.services.promotion.api

import io.reactivex.Single
import th.co.robinhood.common.entity.SingleDataEntity
import th.co.robinhood.model.promotion.PromotionJaa.PromotionJaaEntity
import th.co.robinhood.services.promotion.request.PromotionJaaRequest
import th.co.robinhood.services.promotion.service.PromotionService
import javax.inject.Inject


class PromotionApi @Inject constructor(private val service: PromotionService) {
    
    fun getPromotionJaa(request: PromotionJaaRequest): Single<SingleDataEntity<PromotionJaaEntity>> {
        return service.getPromotionJaa(request)
    }
}