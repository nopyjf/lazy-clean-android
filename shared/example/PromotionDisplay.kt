package th.co.robinhood.model.promotion.promotionjaa

import kotlinx.parcelize.Parcelize
import th.co.robinhood.common.display.BaseModelDisplay


@Parcelize
data class PromotionJaaPromotionJaaDislay(
    var promotionList: List<PromotionList>,
    var pagination: Pagination,

) : BaseModelDisplay()

@Parcelize
data class PromotionJaaPromotionListDislay(
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

@Parcelize
data class PromotionJaaPaginationDislay(
    var currentPage: Int,
    var pageSize: Int,
    var hasNextPage: Boolean,
    var hasPreviousPage: Boolean,

) : BaseModelDisplay()

