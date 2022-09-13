package th.co.robinhood.services.mart.controller

import io.reactivex.disposables.CompositeDisposable
import th.co.robinhood.common.controller.BaseController
import th.co.robinhood.common.di.FeatureAnnotation
import th.co.robinhood.model.mart..MartFav.MartFavDisplay
import th.co.robinhood.model.mart..MartFav.MartFavDisplayMapper
import th.co.robinhood.services.mart.request.MartFavRequest
import th.co.robinhood.services.mart.service.GetMartFavUseCase
import javax.inject.Inject


@FeatureAnnotation
class MartController @Inject constructor(
    private val getMartFavUseCase: GetMartFavUseCase,
    private val martFavDisplayMapper: MartFavDisplayMapper
) : BaseController() {

    fun getMartFav(
        request: MartFavRequest,
        onSuccess: (MartFavDisplay) -> Unit,
        onError: (Throwable) -> Unit
    ) {
        getMartFavUseCase.execute(
            onSuccess,
            onError,
            GetMartFavUseCase.Param(request), {
                martFavDisplayMapper.transform(it)
            },
            CompositeDisposable()
        )
    }
}
