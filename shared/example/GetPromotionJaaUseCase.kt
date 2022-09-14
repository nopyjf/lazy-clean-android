package th.co.robinhood.services.promotion.repository

import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.common.executor.ThreadExecutor
import th.co.robinhood.common.interactor.BaseSingleUseCase
import th.co.robinhood.common.interactor.ThreadExecutors
import th.co.robinhood.model.promotion.PromotionJaa.PromotionJaa
import th.co.robinhood.services.promotion.request.PromotionJaaRequest
import th.co.robinhood.services.promotion.repository.PromotionRepositoryContractor
import javax.inject.Inject
import javax.inject.Named


@FeatureAnnotation
class GetPromotionJaaUseCase @Inject constructor(
    @Named(ThreadExecutors.FEATURES_SUBSCRIBER_ON_IO) subscriberOn: ThreadExecutor,
    @Named(ThreadExecutors.FEATURES_OBSERVER_ON) observerOn: ThreadExecutor,
    private val repository: PromotionRepositoryContractor
) : BaseSingleUseCase<PromotionJaa, GetPromotionJaaUseCase.Param>(
    subscriberOn,
    observerOn,
    builder = { param -> repository.getMartLanding(request) }
) {
    class Param(val request: PromotionJaaRequest) : Params
}