package th.co.robinhood.services.promotion.repository

import io.reactivex.Single
import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.model.promotion.PromotionJaa.PromotionJaa
import th.co.robinhood.model.promotion.PromotionJaa.PromotionJaaMapper
import th.co.robinhood.services.promotion.request.PromotionJaaRequest
import th.co.robinhood.services.promotion.service.PromotionApi
import javax.inject.Inject


@FeatureAnnotation
class PromotionRepository @Inject constructor(
    private val api: PromotionApi,
    private val mapper: PromotionJaaEntityMapper
) : PromotionRepositoryContractor {

    override fun getPromotionJaa(request: PromotionJaaRequest): Single<PromotionJaa> {
        return api.getPromotionJaa(request)
            .map { it.data }
            .map { mapper.transformEntity(it) }
        
        service.getPromotionJaa(request)
    }
}