package th.co.robinhood.model.mart.martfav

import com.google.gson.annotations.SerializedName


data class MartFavEntity(
    @SerializedName("promotionId") var promotionId: Int?,
    @SerializedName("promotionName") var promotionName: String?,
    @SerializedName("shortDescription") var shortDescription: String?,
    @SerializedName("discount") var discount: Int?,
    @SerializedName("maximumDiscount") var maximumDiscount: Int?,
    @SerializedName("discountType") var discountType: String?,
    @SerializedName("discountFor") var discountFor: String?,
    @SerializedName("promotionLink") var promotionLink: String?,
    @SerializedName("promotionType") var promotionType: String?,
    @SerializedName("iconUrl") var iconUrl: String?,
    @SerializedName("voucherCode") var voucherCode: String?,
    @SerializedName("promotionCode") var promotionCode: String?,
    @SerializedName("startDate") var startDate: String?,
    @SerializedName("endDate") var endDate: String?,
    @SerializedName("applicationKey") var applicationKey: String?,

)