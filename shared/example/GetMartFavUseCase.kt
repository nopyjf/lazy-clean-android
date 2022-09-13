package th.co.robinhood.services.mart.repository

import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.common.executor.ThreadExecutor
import th.co.robinhood.common.interactor.BaseSingleUseCase
import th.co.robinhood.common.interactor.ThreadExecutors
import th.co.robinhood.model.mart.MartFav.MartFav
import th.co.robinhood.services.mart.request.MartFavRequest
import th.co.robinhood.services.mart.repository.MartRepositoryContractor
import javax.inject.Inject
import javax.inject.Named


@FeatureAnnotation
class GetMartFavUseCase @Inject constructor(
    @Named(ThreadExecutors.FEATURES_SUBSCRIBER_ON_IO) subscriberOn: ThreadExecutor,
    @Named(ThreadExecutors.FEATURES_OBSERVER_ON) observerOn: ThreadExecutor,
    private val repository: MartRepositoryContractor
) : BaseSingleUseCase<MartFav, GetMartFavUseCase.Param>(
    subscriberOn,
    observerOn,
    builder = { param -> repository.getMartLanding(request) }
) {
    class Param(val request: MartFavRequest) : Params
}