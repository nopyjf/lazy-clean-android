package th.co.robinhood.services.mart.api

import io.reactivex.Single
import th.co.robinhood.common.entity.SingleDataEntity
import th.co.robinhood.model.mart.MartFav.MartFavEntity
import th.co.robinhood.services.mart.request.MartFavRequest
import th.co.robinhood.services.mart.service.MartService
import javax.inject.Inject


class MartApi @Inject constructor(private val service: MartService) {
    
    fun getMartFav(request: MartFavRequest): Single<SingleDataEntity<MartFavEntity>> {
        return service.getMartFav(request)
    }
}