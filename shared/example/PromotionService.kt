package th.co.robinhood.services.promotion.service

import io.reactivex.Single
import retrofit2.http.Body
import th.co.robinhood.common.entity.SingleDataEntity
import th.co.robinhood.model.promotion.PromotionJaa.PromotionJaaEntity
import th.co.robinhood.services.promotion.request.PromotionJaaRequest


interface PromotionService {
    
    @GET("promoengine/v2/promoengine/inquiry")
    fun getPromotionJaa(
        @Body request: PromotionJaaRequest
    ): Single<SingleDataEntity<PromotionJaaEntity>>
} Single<SingleDataEntity<PromotionJaaEntity>> {
        return service.getPromotionJaa(request)
    }
}