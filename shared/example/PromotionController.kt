package th.co.robinhood.services.promotion.controller

import io.reactivex.disposables.CompositeDisposable
import th.co.robinhood.common.controller.BaseController
import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.model.promotion..PromotionJaa.PromotionJaaDisplay
import th.co.robinhood.model.promotion..PromotionJaa.PromotionJaaDisplayMapper
import th.co.robinhood.services.promotion.request.PromotionJaaRequest
import th.co.robinhood.services.promotion.service.GetPromotionJaaUseCase
import javax.inject.Inject


@FeatureAnnotation
class MartController @Inject constructor(
    private val getPromotionJaaUseCase: GetPromotionJaaUseCase,
    private val promotionJaaDisplayMapper: PromotionJaaDisplayMapper
) : BaseController() {

    fun getPromotionJaa(
        request: PromotionJaaRequest,
        onSuccess: (PromotionJaaDisplay) -> Unit,
        onError: (Throwable) -> Unit
    ) {
        getPromotionJaaUseCase.execute(
            onSuccess,
            onError,
            GetPromotionJaaUseCase.Param(request), {
                promotionJaaDisplayMapper.transform(it)
            },
            CompositeDisposable()
        )
    }
}
