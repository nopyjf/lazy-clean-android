package th.co.robinhood.model.mart.martfav

import kotlinx.parcelize.Parcelize
import th.co.robinhood.common.display.BaseModelDisplay


@Parcelize
data class MartFavDislay(
    var promotionId: Int,
    var promotionName: String,
    var shortDescription: String,
    var discount: Int,
    var maximumDiscount: Int,
    var discountType: String,
    var discountFor: String,
    var promotionLink: String,
    var promotionType: String,
    var iconUrl: String,
    var voucherCode: String,
    var promotionCode: String,
    var startDate: String,
    var endDate: String,
    var applicationKey: String,

) : BaseModelDisplay()